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
import { IAssetRepository } from "../../domain/repositories/assets";
import {
  IAssetsController,
  AssetsController
} from "../../interfaces/controllers/assets";
import AssetRepository from "../repositories/assets";

export const registerRepositories = () => {
  container.registerSingleton<IAssetRepository>(
    "IAssetRepository",
    AssetRepository
  );
};

export const registerUseCases = () => {
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
};

export const registerControllers = () => {
  container.registerSingleton<IAssetsController>(
    "IAssetsController",
    AssetsController
  );
};
