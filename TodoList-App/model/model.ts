import mongoose, { model } from "mongoose";
const congviec = new mongoose.Schema({
    congviec : {type:String , required:true},
    order : {type:Number, required : true}
})

export default mongoose.model("Todolist", congviec)