import { UseCase } from "../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { Asset } from "../../../domain/types";
import { IAssetRepository } from "../../../domain/repositories/assets";

export type ListAllAssetsByOwnerRequest = {
  ownerId: string;
};

export type IListAssetAllByOwnerUseCase = UseCase<
  ListAllAssetsByOwnerRequest,
  Promise<Asset[]>
>;

@injectable()
export class ListAssetAllByOwnerUseCase implements ListAssetAllByOwnerUseCase {
  private assetRepository: IAssetRepository;

  constructor(@inject("IAssetRepository") assetRepository: IAssetRepository) {
    this.assetRepository = assetRepository;
  }

  async execute(request: ListAllAssetsByOwnerRequest): Promise<Asset[]> {
    const { ownerId } = request;
    const listedAssets = await this.assetRepository.getManyByOwnerId(ownerId);

    return listedAssets;
  }
}
