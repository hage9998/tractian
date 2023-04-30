import { UseCase } from "./../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { Asset } from "../../../domain/types";
import { IAssetRepository } from "../../../domain/repositories/assets";

export type CreateAssetRequest = {
  asset: Omit<Asset, "owner">;
};

export type ICreateAssetUseCase = UseCase<CreateAssetRequest, Promise<Asset>>;

@injectable()
export class CreateAssetUseCase implements ICreateAssetUseCase {
  private assetRepository: IAssetRepository;

  constructor(@inject("IAssetRepository") assetRepository: IAssetRepository) {
    this.assetRepository = assetRepository;
  }

  async execute(request: CreateAssetRequest): Promise<Asset> {
    const { asset } = request;
    const createdAsset = await this.assetRepository.create(asset);

    return createdAsset;
  }
}
