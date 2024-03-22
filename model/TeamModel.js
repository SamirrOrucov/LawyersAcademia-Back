import mongoose from "mongoose";

const { Schema } = mongoose;

const teamSchema = new Schema(
  {
    profilImage: String,
    name: String,
    role: String,
    socialMedia1:String,
    socialMedia2:String,
    socialMedia3:String,

  },
  {
    timestamps: {
      currentTime: () => new Date().getTime() + 4 * 60 * 60 * 1000,
    },
  }
);
export const TeamModel = mongoose.model("TeamModel", teamSchema);
