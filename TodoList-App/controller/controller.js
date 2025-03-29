"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dichuyen = exports.xoahet = exports.them = exports.xoa = exports.hien = void 0;
const model_1 = __importDefault(require("../model/model"));
const hien = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const check = yield model_1.default.find();
    res.json(check);
});
exports.hien = hien;
const xoa = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const xoa = yield model_1.default.deleteOne(req.body);
    res.send(xoa);
});
exports.xoa = xoa;
const them = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { congviec } = req.body;
    const exists = yield model_1.default.findOne(req.body);
    if (exists) {
        res.send("đã tồn tại");
    }
    else {
        const data = yield model_1.default.find();
        let neworder;
        if (data.length > 0) {
            neworder = data[data.length - 1].order + 1;
        }
        else {
            neworder = 1;
        }
        yield model_1.default.create({ congviec, order: neworder });
        res.send("success");
    }
});
exports.them = them;
const xoahet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const xoa = yield model_1.default.deleteMany({});
    res.send(xoa);
});
exports.xoahet = xoahet;
const dichuyen = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { _id, huong } = req.body;
    let task = yield model_1.default.findOne({ _id: _id });
    if (!task) {
        return res.status(400).send("Task không tồn tại.");
    }
    let order = task.order;
    if (isNaN(order) || isNaN(huong)) {
        return res.status(400).send("Lỗi: order hoặc huong không hợp lệ.");
    }
    const targetTask = yield model_1.default.findOne({ order: order + huong });
    if (!targetTask) {
        return res.status(400).send("Không thể di chuyển, vị trí không hợp lệ.");
    }
    yield model_1.default.updateOne({ _id: targetTask._id }, { $set: { order: order } });
    yield model_1.default.updateOne({ _id: _id }, { $set: { order: order + huong } });
    res.send("Di chuyển thành công.");
});
exports.dichuyen = dichuyen;
