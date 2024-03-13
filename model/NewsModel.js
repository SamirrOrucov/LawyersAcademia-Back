import mongoose from "mongoose";

const { Schema } = mongoose;

const newsSchema = new Schema(
  {
    title: String,
    mainImage: String,
    content: String,
  },
  {
    timestamps: true,
    
  }
);
export const NewsModel = mongoose.model("NewsModel", newsSchema);
