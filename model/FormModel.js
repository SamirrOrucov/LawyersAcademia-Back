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
    timestamps: true,
    
  }
);
export const FormModel = mongoose.model("FormSchema", formSchema);
