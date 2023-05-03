import { container } from "tsyringe";
import { IAssetRepository } from "../../../domain/repositories/assets";
import { ICompanyRepository } from "../../../domain/repositories/companies";
import { IUnitRepository } from "../../../domain/repositories/units";
import { IUserRepository } from "../../../domain/repositories/users";
import AssetRepository from "../../../infrastructure/repositories/assets";
import CompanyRepository from "../../../infrastructure/repositories/companies";
import UnitRepository from "../../../infrastructure/repositories/units";
import UserRepository from "../../../infrastructure/repositories/users";
import {
  IAssetsController,
  AssetsController
} from "../../../interfaces/controllers/assets";
import {
  ICompaniesController,
  CompaniesController
} from "../../../interfaces/controllers/companies";
import {
  IUnitsController,
  UnitsController
} from "../../../interfaces/controllers/units";
import {
  IUsersController,
  UsersController
} from "../../../interfaces/controllers/users";

import registerAssetsUseCases from "./userCases/assets";
import registerCompaniesUserCases from "./userCases/companies";
import registerUnitsUseCases from "./userCases/units";
import registerUserUseCases from "./userCases/users";

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
  registerAssetsUseCases();
  registerCompaniesUserCases();
  registerUnitsUseCases();
  registerUserUseCases();
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
