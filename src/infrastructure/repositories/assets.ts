import { IAssetRepository } from "../../domain/repositories/assets";
import { Asset } from "../../domain/types";
import { injectable } from "tsyringe";
import { AssetModel } from "../../domain/models";

@injectable()
class AssetRepository implements IAssetRepository {
  async create(asset: Asset): Promise<Asset> {
    const { name, description, healthLevel, image, model, status } = asset;
    const assetModel = new AssetModel({
      name,
      description,
      model,
      status,
      healthLevel,
      image
    });
    // eslint-disable-next-line no-useless-catch
    try {
      const createdAsset = await assetModel.save();
      return {
        ...asset,
        owner: createdAsset.owner?.prototype?.toString()
      } as Asset;
    } catch (error) {
      throw new Error("Failed to create new assets");
    }
  }

  updateById(): Promise<Asset> {
    throw new Error("Method not implemented.");
  }
  deleteById(): Promise<void> {
    throw new Error("Method not implemented.");
  }
  getById(): Promise<Asset> {
    throw new Error("Method not implemented.");
  }
}

export default AssetRepository;
