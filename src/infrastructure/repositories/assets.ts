import { IAssetRepository } from "../../domain/repositories/assets";
import { Asset } from "../../domain/types";
import { injectable } from "tsyringe";
import { AssetModel } from "../../domain/models";
import { Types } from "mongoose";

@injectable()
class AssetRepository implements IAssetRepository {
  async create(asset: Asset): Promise<Asset> {
    const { name, description, healthLevel, image, model, status } = asset;
    try {
      const createdAsset = await AssetModel.create({
        name,
        description,
        model,
        status,
        healthLevel,
        image
      });

      return {
        _id: createdAsset._id.toString(),
        ...asset
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
      await AssetModel.updateOne({ _id: id }, asset, { runValidators: true });
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

  async getManyByOwnerId(ownerId: string): Promise<Asset[]> {
    try {
      return await AssetModel.find({ owner: new Types.ObjectId(ownerId) });
    } catch (error) {
      throw new Error(`Failed to get assets: ${error}`);
    }
  }
}

export default AssetRepository;
