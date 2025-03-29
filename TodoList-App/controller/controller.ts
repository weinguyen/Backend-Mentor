

import { todo } from "node:test";
import Todo from "../model/model"
export const hien = async (req:any, res :any) => {
    const check = await Todo.find();
    res.json(check);
};
export const xoa = async (req:any, res :any) => {
    const xoa = await Todo.deleteOne(req.body);
    res.send(xoa);
};
export const them = async (req:any, res :any) => {
    const {congviec} = req.body;
    const exists = await Todo.findOne(req.body);
    if(exists){
        res.send("đã tồn tại");
    }
    else{
        const data = await Todo.find();
        let neworder : Number;
        if(data.length > 0){
             neworder= data[data.length - 1].order +1;
        }
        else{
                neworder = 1
        }
        await Todo.create({congviec, order : neworder})
        res.send("success");
             
        

    }
};
export const xoahet = async (req:any, res :any) => {  
    const xoa = await Todo.deleteMany({});
    res.send(xoa);
};
export const dichuyen = async (req: any, res: any) => {
    let { _id, huong } = req.body;
    let task = await Todo.findOne({_id : _id})
    if (!task) {
        return res.status(400).send( "Task không tồn tại." );
    }
    let order = task.order;
    if (isNaN(order) || isNaN(huong)) {
        return res.status(400).send("Lỗi: order hoặc huong không hợp lệ.");
    }



    const targetTask = await Todo.findOne({ order: order + huong });

    if (!targetTask) {
        return res.status(400).send("Không thể di chuyển, vị trí không hợp lệ.");
    }

    await Todo.updateOne({ _id: targetTask._id }, { $set: { order: order } });
    await Todo.updateOne({ _id: _id }, { $set: { order: order + huong } });

    res.send("Di chuyển thành công.");
};
