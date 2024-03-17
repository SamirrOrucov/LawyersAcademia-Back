import mongoose from "mongoose";

const { Schema } = mongoose;

const newsSchema = new Schema(
  {
    title: String,
    mainImage: String,
    content: String,
  },
  {
    timestamps: {
      currentTime: () => new Date().getTime() + 4 * 60 * 60 * 1000,
    },
  }
);
export const NewsModel = mongoose.model("NewsModel", newsSchema);
