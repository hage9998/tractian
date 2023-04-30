import { Asset } from "../types";

export interface IAssetRepository {
  create(asset: Asset): Promise<Asset>;
  updateById(id: string, asset: Partial<Omit<Asset, "owner">>): Promise<Asset>;
  deleteById(id: string): Promise<void>;
  getById(id: string): Promise<Asset>;
}
