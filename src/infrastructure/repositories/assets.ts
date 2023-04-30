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
    try {
      const createdAsset = await assetModel.save();
      return {
        ...asset,
        owner: createdAsset.owner?.prototype?.toString()
      } as Asset;
    } catch (error) {
      throw new Error(`Failed to create new asset: ${error}`);
    }
  }

  async updateById(
    id: string,
    asset: Partial<Omit<Asset, "owner">>
  ): Promise<void> {
    try {
      await AssetModel.updateOne({ _id: id }, asset);
    } catch (error) {
      throw new Error(`Failed to update asset: ${error}`);
    }
  }

  async deleteById(id: string): Promise<void> {
    try {
      await AssetModel.deleteOne({ _id: id });
    } catch (error) {
      throw new Error(`Failed to delete asset: ${error}`);
    }
  }

  async getById(id: string): Promise<Asset> {
    try {
      return await AssetModel.findOne({ _id: id });
    } catch (error) {
      throw new Error(`Failed to get asset: ${error}`);
    }
  }
}

export default AssetRepository;
