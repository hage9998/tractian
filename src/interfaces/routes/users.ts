import { IUsersController } from "./../controllers/users";
import { Router } from "express";
import { inject, injectable } from "tsyringe";

@injectable()
export class UsersRoutes {
  public router = Router();
  private usersController: IUsersController;

  constructor(@inject("IUsersController") usersController: IUsersController) {
    this.usersController = usersController;
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.post("/user", this.usersController.createUser);
    this.router.put("/user", this.usersController.updateUser);
    this.router.delete("/user/:userId", this.usersController.deleteUser);
    this.router.get("/user/id/:userId", this.usersController.listUser);
    this.router.get(
      "/user/company/:companyId",
      this.usersController.listManyUserByCompany
    );
    this.router.get("/user/all", this.usersController.listAllUsers);
  }
}
