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
exports.xoahet = exports.them = exports.xoa = exports.hien = void 0;
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
    const exists = yield model_1.default.findOne(req.body);
    exists ? res.json({ error: "Đã tồn tại" }) : res.send(yield model_1.default.create(req.body));
});
exports.them = them;
const xoahet = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const xoa = yield model_1.default.deleteMany({});
    res.send(xoa);
});
exports.xoahet = xoahet;
