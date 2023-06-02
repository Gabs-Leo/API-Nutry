import { Request, Response } from "express";
import { prisma } from "../server";
import { RestResponse } from "../utils/RestResponse";

export class AppUserController {
    static findAll = 
        async (request:Request, response:Response) => response.status(200).json(new RestResponse(
            await prisma.user.findMany(),
            []
        ));
            //await prisma.user.create({data: {...request.body},}).catch((i) => i), []
    static save = (request:Request, response:Response) => {};
    static delete = (request:Request, response:Response) => {};
}