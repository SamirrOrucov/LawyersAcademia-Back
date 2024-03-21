import mongoose from "mongoose";
import { LegislationLawModel } from "./LegislationLawModel.js";
const { Schema } = mongoose;

const legislationSchema = new Schema(
  {
    title: String,
    law: [
      {
        type: Schema.Types.ObjectId,
        ref: "LegislationLawModel"
      },
    ],
  },
  {
    timestamps: {
      currentTime: () => new Date().getTime() + 4 * 60 * 60 * 1000,
    },
  }
);
export const LegislationModel = mongoose.model(
  "LegislationModel",
  legislationSchema
);
