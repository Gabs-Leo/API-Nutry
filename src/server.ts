require('dotenv').config();
import Express from "express";
import { routes } from "./routes";
import { PrismaClient } from "@prisma/client";

const app = Express();
export const prisma = new PrismaClient();

routes(app);

app.listen(process.env.PORT)