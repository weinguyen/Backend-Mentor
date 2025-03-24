var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var express = require("express");
var cors = require("cors");
var mongoose = require("mongoose");
var app = express();
app.use(cors());
app.use(express.json());
var url = "mongodb://localhost:27017/test";
mongoose.connect(url, {})
    .then(function () { return console.log("✅ Connected to database"); })
    .catch(function () { return process.exit(1); });
var todoSchema = new mongoose.Schema({ congviec: String });
var Todo = mongoose.model("Todolist", todoSchema);
app.listen(3000, function () { return console.log("🚀 Server running on http://localhost:3000"); });
app.post("/them", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var exists, _a, _b, _c;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0: return [4 /*yield*/, Todo.findOne(req.body)];
            case 1:
                exists = _d.sent();
                if (!exists) return [3 /*break*/, 2];
                _a = res.json({ error: "Đã tồn tại" });
                return [3 /*break*/, 4];
            case 2:
                _c = (_b = res).send;
                return [4 /*yield*/, Todo.create(req.body)];
            case 3:
                _a = _c.apply(_b, [_d.sent()]);
                _d.label = 4;
            case 4:
                _a;
                return [2 /*return*/];
        }
    });
}); });
app.get("/hien", function (_, res) { return __awaiter(_this, void 0, void 0, function () {
    var check;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Todo.find()];
            case 1:
                check = _a.sent();
                res.json(check);
                return [2 /*return*/];
        }
    });
}); });
app.delete("/xoa", function (req, res) { return __awaiter(_this, void 0, void 0, function () {
    var _a, _b;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _b = (_a = res).send;
                return [4 /*yield*/, Todo.findByIdAndDelete(req.body._id)];
            case 1:
                _b.apply(_a, [_c.sent()]);
                return [2 /*return*/];
        }
    });
}); });
app.delete("/xoahet", function (_, res) { return __awaiter(_this, void 0, void 0, function () {
    var xoa;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Todo.deleteMany({})];
            case 1:
                xoa = _a.sent();
                res.send(xoa);
                return [2 /*return*/];
        }
    });
}); });
/*
app.put("/sua", async (req, res) => {
    const { _id, ...rest } = req.body;
    res.send(await Todo.findByIdAndUpdate(_id, rest, { new: true }));
});
*/ 
