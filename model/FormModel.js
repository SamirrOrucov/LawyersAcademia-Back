import mongoose from "mongoose";

const { Schema } = mongoose;

const formSchema = new Schema(
  {
    email: String,
    number: String,
    content: String,
    username: String,
    file:String
  },
  {
    timestamps: {
      currentTime: () => new Date().getTime() + 4 * 60 * 60 * 1000,
    },
  }
);
export const FormModel = mongoose.model("FormSchema", formSchema);
