

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
    const exists = await Todo.findOne(req.body);
    exists ? res.json({ error: "Đã tồn tại" }) : res.send(await Todo.create(req.body))
};
export const xoahet = async (req:any, res :any) => {  
    const xoa = await Todo.deleteMany({});
    res.send(xoa);
};
