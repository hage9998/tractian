import { model } from "mongoose";
import { AssetSchema } from "../schemas";

export const AssetModel = model("Asset", AssetSchema);
