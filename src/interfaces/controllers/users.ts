import { NextFunction, Request, Response } from "express";
import { inject, injectable } from "tsyringe";
import {
  ICreateUserUseCase,
  CreateUserRequest
} from "../../application/useCases/users/create";
import { IDeleteUserUseCase } from "../../application/useCases/users/delete";
import { IListAllUsersUseCase } from "../../application/useCases/users/listAll";
import { IListUserByCompanyUseCase } from "../../application/useCases/users/listByCompany";
import { IListUserUseCase } from "../../application/useCases/users/read";
import {
  IUpdateUserUseCase,
  UpdateUserRequest
} from "../../application/useCases/users/update";

export interface IUsersController {
  createUser(req: Request, res: Response, next: NextFunction): Promise<void>;
  updateUser(req: Request, res: Response, next: NextFunction): Promise<void>;
  listUser(req: Request, res: Response, next: NextFunction): Promise<void>;
  deleteUser(req: Request, res: Response, next: NextFunction): Promise<void>;
  listManyUserByCompany(
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void>;
  listAllUsers(req: Request, res: Response, next: NextFunction): Promise<void>;
}

@injectable()
export class UsersController implements IUsersController {
  private createUserUseCase: ICreateUserUseCase;
  private updateUserUseCase: IUpdateUserUseCase;
  private listUserUseCase: IListUserUseCase;
  private deleteUserUseCase: IDeleteUserUseCase;
  private listUserByCompanyUseCase: IListUserByCompanyUseCase;
  private listAllUsersUseCase: IListAllUsersUseCase;

  constructor(
    @inject("ICreateUserUseCase") createUserUseCase: ICreateUserUseCase,
    @inject("IUpdateUserUseCase") updateUserUseCase: IUpdateUserUseCase,
    @inject("IListUserUseCase") listUserUseCase: IListUserUseCase,
    @inject("IDeleteUserUseCase") deleteUserUseCase: IDeleteUserUseCase,
    @inject("IListUserByCompanyUseCase")
    listUserByCompanyUseCase: IListUserByCompanyUseCase,
    @inject("IListAllUsersUseCase") listAllUsersUseCase: IListAllUsersUseCase
  ) {
    this.createUserUseCase = createUserUseCase;
    this.updateUserUseCase = updateUserUseCase;
    this.listUserUseCase = listUserUseCase;
    this.deleteUserUseCase = deleteUserUseCase;
    this.listUserByCompanyUseCase = listUserByCompanyUseCase;
    this.listAllUsersUseCase = listAllUsersUseCase;

    this.createUser = this.createUser.bind(this);
    this.updateUser = this.updateUser.bind(this);
    this.listUser = this.listUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.listManyUserByCompany = this.listManyUserByCompany.bind(this);
    this.listAllUsers = this.listAllUsers.bind(this);
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { user }: CreateUserRequest = req.body;

      const response = await this.createUserUseCase.execute({ user });

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId, user }: UpdateUserRequest = req.body;
      await this.updateUserUseCase.execute({
        user,
        userId
      });

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  async listUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;
      const response = await this.listUserUseCase.execute({
        userId
      });

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { userId } = req.params;
      await this.deleteUserUseCase.execute({
        userId
      });

      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }

  async listManyUserByCompany(req: Request, res: Response, next: NextFunction) {
    try {
      const { companyId } = req.params;
      const response = await this.listUserByCompanyUseCase.execute({
        companyId
      });

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }

  async listAllUsers(_req: Request, res: Response, next: NextFunction) {
    try {
      const response = await this.listAllUsersUseCase.execute(null);

      res.status(200).json(response);
    } catch (error) {
      next(error);
    }
  }
}
