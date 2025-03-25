"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./config/db");
const router_1 = __importDefault(require("./routers/router"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
(0, db_1.db)();
app.use(express_1.default.json());
app.use("/", router_1.default);
app.listen(3000, () => console.log("1"));
