import mongoose from "mongoose";

const { Schema } = mongoose;

const youtubeLinksSchema = new Schema(
  {
    title: String,
    link: String,
  },
  {
    timestamps: true,
  }
);
export const YoutubeLinksModel = mongoose.model(
  "YoutubeLinksSchema",
  youtubeLinksSchema
);
