import { Asset } from "../types";

export interface IAssetRepository {
  create(asset: Asset): Promise<Asset>;
  updateById(id: string, asset: Partial<Omit<Asset, "_id">>): Promise<void>;
  deleteById(id: string): Promise<void>;
  getById(id: string): Promise<Asset>;
  getManyByOwnerId(ownerId: string): Promise<Asset[]>;
  getAll(): Promise<Asset[]>;
}
