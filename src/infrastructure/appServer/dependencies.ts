import { container } from "tsyringe";
import {
  ICreateAssetUseCase,
  CreateAssetUseCase
} from "../../application/useCases/Assets/create";
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
};

export const registerControllers = () => {
  container.registerSingleton<IAssetsController>(
    "IAssetsController",
    AssetsController
  );
};
