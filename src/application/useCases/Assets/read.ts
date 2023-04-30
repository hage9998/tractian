import { UseCase } from "./../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { Asset } from "../../../domain/types";
import { IAssetRepository } from "../../../domain/repositories/assets";

export type ListAssetRequest = {
  assetId: string;
};

export type IListAssetUseCase = UseCase<ListAssetRequest, Promise<Asset>>;

@injectable()
export class ListAssetUseCase implements IListAssetUseCase {
  private assetRepository: IAssetRepository;

  constructor(@inject("IAssetRepository") assetRepository: IAssetRepository) {
    this.assetRepository = assetRepository;
  }

  async execute(request: ListAssetRequest): Promise<Asset> {
    const { assetId } = request;
    const listedAsset = await this.assetRepository.getById(assetId);
    if (listedAsset) {
      const responseAsset: Asset = {
        _id: listedAsset._id,
        name: listedAsset.name,
        description: listedAsset.description,
        model: listedAsset.model,
        status: listedAsset.status,
        healthLevel: listedAsset.healthLevel,
        image: listedAsset.image
      };

      return responseAsset;
    }
    throw new Error("Asset does not exist");
  }
}
