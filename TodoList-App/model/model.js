"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const congviec = new mongoose_1.default.Schema({
    congviec: { type: String, required: true },
    order: { type: Number, required: true }
});
exports.default = mongoose_1.default.model("Todolist", congviec);
