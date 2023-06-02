import { Request, Response } from "express";
import { RestResponse } from "../utils/RestResponse";

export class AppUserController {
    static findAll = 
        (request:Request, response:Response) => response.status(200).json(new RestResponse<string>("users", []));

    static save = (request:Request, response:Response) => {};
    static delete = (request:Request, response:Response) => {};
}