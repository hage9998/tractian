import { container } from "tsyringe";
import {
  ICreateAssetUseCase,
  CreateAssetUseCase
} from "../../application/useCases/Assets/create";
import {
  IDeleteAssetUseCase,
  DeleteAssetUseCase
} from "../../application/useCases/Assets/delete";
import {
  IListAssetAllByOwnerUseCase,
  ListAssetAllByOwnerUseCase
} from "../../application/useCases/Assets/listAll";
import {
  IListAssetUseCase,
  ListAssetUseCase
} from "../../application/useCases/Assets/read";
import {
  IUpdateAssetUseCase,
  UpdateAssetUseCase
} from "../../application/useCases/Assets/update";
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
