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

    return listedAsset;
  }
}
