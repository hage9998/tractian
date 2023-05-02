import { UseCase } from "../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { Asset } from "../../../domain/types";
import { IAssetRepository } from "../../../domain/repositories/assets";

export type IListAllAssetsUseCase = UseCase<null, Promise<Asset[]>>;

@injectable()
export class ListAllAssetsUseCase implements IListAllAssetsUseCase {
  private assetRepository: IAssetRepository;

  constructor(@inject("IAssetRepository") assetRepository: IAssetRepository) {
    this.assetRepository = assetRepository;
  }

  async execute(): Promise<Asset[]> {
    return await this.assetRepository.getAll();
  }
}
