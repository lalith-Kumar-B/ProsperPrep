import express  from "express";
import ytRouter from "./routes/ytSearch.js";
import bodyParser from "body-parser";
import cors from "cors";

const app = express();
app.use(cors({origin : 'http://localhost:5173'}));
app.use(bodyParser.json());
app.use('/ytVideo', ytRouter);

export default app;