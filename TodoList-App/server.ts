const router = require("express")()
router.use(require("cors")())
router.use(require("express").json()) 

var mongodb = require('mongodb');
const { default: mongoose } = require("mongoose");
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017';
var db;
MongoClient.connect(url, { useUnifiedTopology: true })
    .then(client => {
        db = client.db("test");
        console.log("✅ Connected to database");

        router.listen(3000, () => console.log("🚀 Server running on http://localhost:3000"));
    })
    .catch(err => {
        
        process.exit(1); 
    });

    router.post("/them", (req, res) => {

        db.collection("Todolist").find(req.body).toArray()
            .then(results => {
                if (results.length === 0) {
                    db.collection("Todolist").insertOne(req.body)
                        .then(results => {
                            res.send("them thanh cong");
                        })
                } else {
                    res.json({ error: "Đã tồn tại" });
                }
            })
          
    })
    router.get("/hien", (req, res) => {
        db.collection("Todolist").find().toArray()
            .then(results => {
                res.json(results);
            })
    })
    router.delete("/xoa", (req, res) => {
        db.collection("Todolist").deleteOne({_id : new mongoose.Types.ObjectId(req.body._id)})
            .then(results => {
                res.send(req.body);
            })
    })
    router.delete("/xoahet", (req, res) => {
        db.collection("Todolist").deleteMany({})
            .then(results => {
                res.send("Xóa het thành công");
            })
    })
