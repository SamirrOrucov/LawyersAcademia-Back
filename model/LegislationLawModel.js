import mongoose from "mongoose";

const { Schema } = mongoose;

const legislationLawSchema = new Schema(
  {
    legislationId: {
      type: Schema.Types.ObjectId,
      ref: "LegislationModel",
    },
    title: String,
    link: String,
  },
  {
    timestamps: {
      currentTime: () => new Date().getTime() + 4 * 60 * 60 * 1000,
    },
  }
);
export const LegislationLawModel = mongoose.model(
  "LegislationLawModel",
  legislationLawSchema
);
