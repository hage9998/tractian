import { UseCase } from "./../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { Asset } from "../../../domain/types";
import { IAssetRepository } from "../../../domain/repositories/assets";

export type CreateAssetRequest = {
  asset: Omit<Asset, "owner">;
};

@injectable()
export class CreateAssetUseCase
  implements UseCase<CreateAssetRequest, Promise<Asset>>
{
  private assetRepository: IAssetRepository;

  constructor(@inject("AssetRepository") assetRepository: IAssetRepository) {
    this.assetRepository = assetRepository;
  }

  async execute(request: CreateAssetRequest): Promise<Asset> {
    const { asset } = request;
    const createdAsset = await this.assetRepository.create(asset);

    return createdAsset;
  }
}
