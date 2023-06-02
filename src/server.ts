require('dotenv').config();
import Express from "express";
import { routes } from "./routes";

const app = Express();

routes(app);

app.listen(process.env.PORT)