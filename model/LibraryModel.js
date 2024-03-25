import mongoose from "mongoose";

const { Schema } = mongoose;

const librarySchema = new Schema(
  {
    title: String,
    description: String,
    bookPhoto: String,
    author: String,
    bookFile: String,
    year:String
  },
  {
    timestamps: {
      currentTime: () => new Date().getTime() + 4 * 60 * 60 * 1000,
    },
  }
);
export const LibraryModel = mongoose.model("LibrarySchema", librarySchema);
