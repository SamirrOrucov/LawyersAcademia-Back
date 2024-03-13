import mongoose from "mongoose";

const { Schema } = mongoose;

const articleCounterSchema = new Schema(
  {
    title: String,
    count: Number,
  },
  {
    timestamps: true,
  }
);
export const ArticleCounterModel = mongoose.model(
  "artileCountModel",
  articleCounterSchema
);
