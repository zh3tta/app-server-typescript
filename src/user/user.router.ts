import { BaseRouter } from "../shared/router/router";
import { UserController } from "./controllers/user.controller";

export class UserRouter extends BaseRouter<UserController> {
    constructor() {
        super(UserController);
    }

    routes(): void {
        this.router.get("/users", (req, res) => this.controller.getUsers(req, res));
        this.router.get("/user/:id", (req, res) => this.controller.getUserById(req, res));
        this.router.get("/user/relation/:id", (req, res) => this.controller.getUserWithRelationById(req, res));
        this.router.post("/user/create", (req, res) => this.controller.createUser(req, res));
        this.router.put("/user/update/:id", (req, res) => this.controller.updateUser(req, res));
        this.router.delete("/user/delete/:id", (req, res) => this.controller.deleteUser(req, res));
    }
}