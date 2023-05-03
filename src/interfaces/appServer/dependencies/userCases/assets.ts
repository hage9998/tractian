import { container } from "tsyringe";
import {
  ICreateAssetUseCase,
  CreateAssetUseCase
} from "../../../../application/useCases/assets/create";
import {
  IDeleteAssetUseCase,
  DeleteAssetUseCase
} from "../../../../application/useCases/assets/delete";
import {
  IListAllAssetsUseCase,
  ListAllAssetsUseCase
} from "../../../../application/useCases/assets/listAll";
import {
  IListAssetAllByOwnerUseCase,
  ListAssetAllByOwnerUseCase
} from "../../../../application/useCases/assets/listByOwner";
import {
  IListAssetUseCase,
  ListAssetUseCase
} from "../../../../application/useCases/assets/read";
import {
  IUpdateAssetUseCase,
  UpdateAssetUseCase
} from "../../../../application/useCases/assets/update";

const registerAssetsUseCases = () => {
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
};

export default registerAssetsUseCases;
