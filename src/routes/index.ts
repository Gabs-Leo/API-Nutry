import core from "express";
import Express from "express";
import { AppUserController } from "../controllers/AppUserController";
import { RestResponse } from "../utils/RestResponse";

export const routes = (app:core.Express) => {
    app.route("/").get(
        (request, response) => response.status(200).json(new RestResponse<string>("Hello Nutry!",[]))
    );
    app.use(Express.json(),
        Express.Router().get("/users", AppUserController.findAll)
                        .post("/users", AppUserController.save)
                        .put("/users/:id", AppUserController.delete)
    );
}