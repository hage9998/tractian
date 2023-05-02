// Users Use Cases

import { container } from "tsyringe";
import {
  ICreateUserUseCase,
  CreateUserUseCase
} from "../../../../application/useCases/users/create";
import {
  IDeleteUserUseCase,
  DeleteUserUseCase
} from "../../../../application/useCases/users/delete";
import {
  IListAllUsersUseCase,
  ListAllUsersUseCase
} from "../../../../application/useCases/users/listAll";
import {
  IListUserByCompanyUseCase,
  ListUserByCompanyUseCase
} from "../../../../application/useCases/users/listByCompany";
import {
  IListUserUseCase,
  ListUserUseCase
} from "../../../../application/useCases/users/read";
import {
  IUpdateUserUseCase,
  UpdateUserUseCase
} from "../../../../application/useCases/users/update";

const registerUserUseCases = () => {
  container.registerSingleton<ICreateUserUseCase>(
    "ICreateUserUseCase",
    CreateUserUseCase
  );
  container.registerSingleton<IUpdateUserUseCase>(
    "IUpdateUserUseCase",
    UpdateUserUseCase
  );
  container.registerSingleton<IListUserUseCase>(
    "IListUserUseCase",
    ListUserUseCase
  );
  container.registerSingleton<IDeleteUserUseCase>(
    "IDeleteUserUseCase",
    DeleteUserUseCase
  );
  container.registerSingleton<IListUserByCompanyUseCase>(
    "IListUserByCompanyUseCase",
    ListUserByCompanyUseCase
  );
  container.registerSingleton<IListAllUsersUseCase>(
    "IListAllUsersUseCase",
    ListAllUsersUseCase
  );
};

export default registerUserUseCases;
