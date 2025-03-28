"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const db = () => {
    mongoose_1.default.connect('mongodb://localhost:27017/todolist')
        .then(() => console.log('Connected to database'));
};
exports.db = db;
