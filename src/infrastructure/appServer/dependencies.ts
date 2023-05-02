import { container } from "tsyringe";
import {
  ICreateAssetUseCase,
  CreateAssetUseCase
} from "../../application/useCases/assets/create";
import {
  IDeleteAssetUseCase,
  DeleteAssetUseCase
} from "../../application/useCases/assets/delete";
import {
  IListAllAssetsUseCase,
  ListAllAssetsUseCase
} from "../../application/useCases/assets/listAll";
import {
  IListAssetAllByOwnerUseCase,
  ListAssetAllByOwnerUseCase
} from "../../application/useCases/assets/listByOwner";
import {
  IListAssetUseCase,
  ListAssetUseCase
} from "../../application/useCases/assets/read";
import {
  IUpdateAssetUseCase,
  UpdateAssetUseCase
} from "../../application/useCases/assets/update";
import {
  ICreateCompanyUseCase,
  CreateCompanyUseCase
} from "../../application/useCases/companies/create";
import {
  IDeleteCompanyUseCase,
  DeleteCompanyUseCase
} from "../../application/useCases/companies/delete";
import {
  IListAllCompaniesUseCase,
  ListAllCompaniesUseCase
} from "../../application/useCases/companies/listAll";
import {
  IListCompanyWithUnitsUseCase,
  ListCompanyWithUnitsUseCase
} from "../../application/useCases/companies/listWithUnits";
import {
  IListCompanyUseCase,
  ListCompanyUseCase
} from "../../application/useCases/companies/read";
import {
  IUpdateCompanyUseCase,
  UpdateCompanyUseCase
} from "../../application/useCases/companies/update";
import {
  ICreateUnitUseCase,
  CreateUnitUseCase
} from "../../application/useCases/units/create";
import {
  IDeleteUnitUseCase,
  DeleteUnitUseCase
} from "../../application/useCases/units/delete";
import {
  IListAllUnitsUseCase,
  ListAllUnitsUseCase
} from "../../application/useCases/units/listAll";
import {
  IListUnitByCompanyUseCase,
  ListUnitByCompanyUseCase
} from "../../application/useCases/units/listByCompany";
import {
  IListUnitUseCase,
  ListUnitUseCase
} from "../../application/useCases/units/read";
import {
  IUpdateUnitUseCase,
  UpdateUnitUseCase
} from "../../application/useCases/units/update";
import {
  ICreateUserUseCase,
  CreateUserUseCase
} from "../../application/useCases/users/create";
import {
  IDeleteUserUseCase,
  DeleteUserUseCase
} from "../../application/useCases/users/delete";
import {
  IListAllUsersUseCase,
  ListAllUsersUseCase
} from "../../application/useCases/users/listAll";
import {
  IListUserByCompanyUseCase,
  ListUserByCompanyUseCase
} from "../../application/useCases/users/listByCompany";
import {
  IListUserUseCase,
  ListUserUseCase
} from "../../application/useCases/users/read";
import {
  IUpdateUserUseCase,
  UpdateUserUseCase
} from "../../application/useCases/users/update";
import { IAssetRepository } from "../../domain/repositories/assets";
import { ICompanyRepository } from "../../domain/repositories/companies";
import { IUnitRepository } from "../../domain/repositories/units";
import { IUserRepository } from "../../domain/repositories/users";
import {
  IAssetsController,
  AssetsController
} from "../../interfaces/controllers/assets";
import {
  CompaniesController,
  ICompaniesController
} from "../../interfaces/controllers/companies";
import {
  IUnitsController,
  UnitsController
} from "../../interfaces/controllers/units";
import {
  IUsersController,
  UsersController
} from "../../interfaces/controllers/users";
import AssetRepository from "../repositories/assets";
import CompanyRepository from "../repositories/companies";
import UnitRepository from "../repositories/units";
import UserRepository from "../repositories/users";

export const registerRepositories = () => {
  container.registerSingleton<IAssetRepository>(
    "IAssetRepository",
    AssetRepository
  );

  container.registerSingleton<IUnitRepository>(
    "IUnitRepository",
    UnitRepository
  );

  container.registerSingleton<ICompanyRepository>(
    "ICompanyRepository",
    CompanyRepository
  );

  container.registerSingleton<IUserRepository>(
    "IUserRepository",
    UserRepository
  );
};

export const registerUseCases = () => {
  // Assets Use Cases

  container.registerSingleton<ICreateAssetUseCase>(
    "ICreateAssetUseCase",
    CreateAssetUseCase
  );
  container.registerSingleton<IUpdateAssetUseCase>(
    "IUpdateAssetUseCase",
    UpdateAssetUseCase
  );
  container.registerSingleton<IListAssetUseCase>(
    "IListAssetUseCase",
    ListAssetUseCase
  );
  container.registerSingleton<IDeleteAssetUseCase>(
    "IDeleteAssetUseCase",
    DeleteAssetUseCase
  );
  container.registerSingleton<IListAssetAllByOwnerUseCase>(
    "IListAssetAllByOwnerUseCase",
    ListAssetAllByOwnerUseCase
  );
  container.registerSingleton<IListAllAssetsUseCase>(
    "IListAllAssetsUseCase",
    ListAllAssetsUseCase
  );

  // Units Use Cases

  container.registerSingleton<ICreateUnitUseCase>(
    "ICreateUnitUseCase",
    CreateUnitUseCase
  );
  container.registerSingleton<IUpdateUnitUseCase>(
    "IUpdateUnitUseCase",
    UpdateUnitUseCase
  );
  container.registerSingleton<IListUnitUseCase>(
    "IListUnitUseCase",
    ListUnitUseCase
  );
  container.registerSingleton<IDeleteUnitUseCase>(
    "IDeleteUnitUseCase",
    DeleteUnitUseCase
  );
  container.registerSingleton<IListUnitByCompanyUseCase>(
    "IListUnitByCompanyUseCase",
    ListUnitByCompanyUseCase
  );
  container.registerSingleton<IListAllUnitsUseCase>(
    "IListAllUnitsUseCase",
    ListAllUnitsUseCase
  );

  // Companies Use Cases

  container.registerSingleton<ICreateCompanyUseCase>(
    "ICreateCompanyUseCase",
    CreateCompanyUseCase
  );
  container.registerSingleton<IUpdateCompanyUseCase>(
    "IUpdateCompanyUseCase",
    UpdateCompanyUseCase
  );
  container.registerSingleton<IListCompanyUseCase>(
    "IListCompanyUseCase",
    ListCompanyUseCase
  );
  container.registerSingleton<IDeleteCompanyUseCase>(
    "IDeleteCompanyUseCase",
    DeleteCompanyUseCase
  );
  container.registerSingleton<IListCompanyWithUnitsUseCase>(
    "IListCompanyWithUnitsUseCase",
    ListCompanyWithUnitsUseCase
  );
  container.registerSingleton<IListAllCompaniesUseCase>(
    "IListAllCompaniesUseCase",
    ListAllCompaniesUseCase
  );

  // Users Use Cases

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

export const registerControllers = () => {
  container.registerSingleton<IAssetsController>(
    "IAssetsController",
    AssetsController
  );

  container.registerSingleton<IUnitsController>(
    "IUnitsController",
    UnitsController
  );

  container.registerSingleton<ICompaniesController>(
    "ICompaniesController",
    CompaniesController
  );

  container.registerSingleton<IUsersController>(
    "IUsersController",
    UsersController
  );
};
