
import  express  from "express";
import cors from "cors";
import {db} from "./config/db"
import router from "./routers/router";
const app = express();
app.use(cors());
db();
app.use(express.json());
app.use("/",router)


app.listen(3000, () => console.log("1"));


