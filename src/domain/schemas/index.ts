import { Schema, Types } from "mongoose";

export const AssetSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  model: String,
  owner: { type: Types.ObjectId, ref: "Unit" },
  status: {
    type: String,
    enum: ["Running", "Alerting", "Stopped"],
    default: "Stopped"
  },
  healthLevel: {
    type: Number,
    min: 0,
    max: 100,
    default: 100
  },
  image: String
});

export const UnitSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: String,
  company: { type: Types.ObjectId, ref: "Company" },
  assets: [{ type: Types.ObjectId, ref: "Unit" }]
});
