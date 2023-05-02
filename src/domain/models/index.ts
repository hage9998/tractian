import { model } from "mongoose";
import { AssetSchema, UnitSchema } from "../schemas";

export const AssetModel = model("Asset", AssetSchema);
export const UnitModel = model("Unit", UnitSchema);
