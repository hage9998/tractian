import { model } from "mongoose";
import { AssetSchema } from "../schemas";

const AssetModel = model("Asset", AssetSchema);

export default AssetModel;
