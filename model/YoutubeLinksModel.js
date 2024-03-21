import mongoose from "mongoose";

const { Schema } = mongoose;

const youtubeLinksSchema = new Schema(
  {
    title: String,
    link: String,
  },
  {
    timestamps: {
      currentTime: () => new Date().getTime() + 4 * 60 * 60 * 1000,
    },
  }
);
export const YoutubeLinksModel = mongoose.model(
  "YoutubeLinksSchema",
  youtubeLinksSchema
);
