import express from "express"
import * as control from "../controller/controller"
const router = express.Router();
router.post("/them", 
    control.them
);
router.get("/hien", 
    control.hien
);
router.delete("/xoa", control.xoa);
router.delete("/xoahet", control.xoahet);
router.put("/dichuyen",control.dichuyen);
export default router