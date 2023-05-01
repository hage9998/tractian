import { UseCase } from "../../../commons/useCase";
import { inject, injectable } from "tsyringe";
import { IAssetRepository } from "../../../domain/repositories/assets";

export type DeleteAssetRequest = {
  assetId: string;
};

export type IDeleteAssetUseCase = UseCase<DeleteAssetRequest, Promise<void>>;

@injectable()
export class DeleteAssetUseCase implements IDeleteAssetUseCase {
  private assetRepository: IAssetRepository;

  constructor(@inject("IAssetRepository") assetRepository: IAssetRepository) {
    this.assetRepository = assetRepository;
  }

  async execute(request: DeleteAssetRequest): Promise<void> {
    const { assetId } = request;
    await this.assetRepository.deleteById(assetId);
  }
}
