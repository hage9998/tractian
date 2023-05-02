import mongoose, { Schema, Types } from "mongoose";

export const UnitSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: String,
  company: { type: Types.ObjectId, ref: "Company" }
});

export const AssetSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: String,
  model: String,
  owner: {
    type: Types.ObjectId,
    ref: "Unit",
    validate: {
      validator: async (unitId) => {
        if (unitId) {
          const unit = await mongoose.model("Unit").findById(unitId);
          return unit !== null;
        }
        return true;
      },
      message: "Unit does not exist"
    }
  },
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
