import mongoose from "mongoose";

const { Schema } = mongoose;

const articleCounterSchema = new Schema(
  {
    title: String,
    count: Number,
  },
  {
    timestamps: {
      currentTime: () => new Date().getTime() + 4 * 60 * 60 * 1000,
    },
  }
);
export const ArticleCounterModel = mongoose.model(
  "artileCountModel",
  articleCounterSchema
);
