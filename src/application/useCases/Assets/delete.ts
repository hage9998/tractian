import { UseCase } from "./../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { IAssetRepository } from "../../../domain/repositories/assets";

export type DeleteAssetRequest = {
  assetId: string;
};

@injectable()
export class DeleteAssetUseCase
  implements UseCase<DeleteAssetRequest, Promise<void>>
{
  private assetRepository: IAssetRepository;

  constructor(@inject("AssetRepository") assetRepository: IAssetRepository) {
    this.assetRepository = assetRepository;
  }

  async execute(request: DeleteAssetRequest): Promise<void> {
    const { assetId } = request;
    await this.assetRepository.deleteById(assetId);
  }
}
