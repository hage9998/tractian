import { model } from "mongoose";
import { AssetSchema, CompanySchema, UnitSchema } from "../schemas";

export const AssetModel = model("Asset", AssetSchema);
export const UnitModel = model("Unit", UnitSchema);
export const CompanyModel = model("Company", CompanySchema);
