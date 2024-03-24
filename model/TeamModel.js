import mongoose from "mongoose";

const { Schema } = mongoose;

const teamSchema = new Schema(
  {
    profilImage: String,
    name: String,
    role: String,
    email: String,
    phone: String,
  },
  {
    timestamps: {
      currentTime: () => new Date().getTime() + 4 * 60 * 60 * 1000,
    },
  }
);
export const TeamModel = mongoose.model("TeamModel", teamSchema);
