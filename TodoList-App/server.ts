
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());

const url = "mongodb://localhost:27017/test";
mongoose.connect(url, { })
    .then(() => console.log("✅ Connected to database"))
    .catch(() => process.exit(1));

const todoSchema = new mongoose.Schema({ congviec: String });
const Todo = mongoose.model("Todolist", todoSchema);

app.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));

app.post("/them", async (req, res) => {
    const exists = await Todo.findOne(req.body);
    exists ? res.json({ error: "Đã tồn tại" }) : res.send(await Todo.create(req.body));
});

app.get("/hien", async (_, res) => {
    const check = await Todo.find();
    res.json(check);
});

app.delete("/xoa", async (req, res) => {
    res.send(await Todo.findByIdAndDelete(req.body._id));
});

app.delete("/xoahet", async (_, res) => {
    const xoa = await Todo.deleteMany({});
    res.send(xoa);
});

/*
app.put("/sua", async (req, res) => {
    const { _id, ...rest } = req.body;
    res.send(await Todo.findByIdAndUpdate(_id, rest, { new: true }));
});
*/