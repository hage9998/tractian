import { UseCase } from "./../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { Asset } from "../../../domain/types";
import { IAssetRepository } from "../../../domain/repositories/assets";

export type UpdateAssetRequest = {
  assetId: string;
  asset: Omit<Asset, "_id">;
};

export type IUpdateAssetUseCase = UseCase<UpdateAssetRequest, Promise<void>>;

@injectable()
export class UpdateAssetUseCase implements IUpdateAssetUseCase {
  private assetRepository: IAssetRepository;

  constructor(@inject("IAssetRepository") assetRepository: IAssetRepository) {
    this.assetRepository = assetRepository;
  }

  async execute(request: UpdateAssetRequest): Promise<void> {
    const { assetId, asset } = request;
    await this.assetRepository.updateById(assetId, asset);
  }
}
