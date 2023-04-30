import { UseCase } from "./../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { Asset } from "../../../domain/types";
import { IAssetRepository } from "../../../domain/repositories/assets";

export type UpdateAssetRequest = {
  assetId: string;
  asset: Omit<Asset, "owner">;
};

export type IUpdateAssetUseCase = UseCase<UpdateAssetRequest, Promise<Asset>>;

@injectable()
export class UpdateAssetUseCase implements IUpdateAssetUseCase {
  private assetRepository: IAssetRepository;

  constructor(@inject("IAssetRepository") assetRepository: IAssetRepository) {
    this.assetRepository = assetRepository;
  }

  async execute(request: UpdateAssetRequest): Promise<Asset> {
    const { assetId, asset } = request;
    const updatedAsset = await this.assetRepository.updateById(assetId, asset);

    return updatedAsset;
  }
}