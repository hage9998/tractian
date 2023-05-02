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
import { IAssetRepository } from "../../domain/repositories/assets";
import { IUnitRepository } from "../../domain/repositories/units";
import {
  IAssetsController,
  AssetsController
} from "../../interfaces/controllers/assets";
import {
  IUnitsController,
  UnitsController
} from "../../interfaces/controllers/units";
import AssetRepository from "../repositories/assets";
import UnitRepository from "../repositories/units";

export const registerRepositories = () => {
  container.registerSingleton<IAssetRepository>(
    "IAssetRepository",
    AssetRepository
  );

  container.registerSingleton<IUnitRepository>(
    "IUnitRepository",
    UnitRepository
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
};
