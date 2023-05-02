import { container } from "tsyringe";
import { IAssetRepository } from "../../../domain/repositories/assets";
import { ICompanyRepository } from "../../../domain/repositories/companies";
import { IUnitRepository } from "../../../domain/repositories/units";
import { IUserRepository } from "../../../domain/repositories/users";
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
import AssetRepository from "../../repositories/assets";
import CompanyRepository from "../../repositories/companies";
import UnitRepository from "../../repositories/units";
import UserRepository from "../../repositories/users";
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
