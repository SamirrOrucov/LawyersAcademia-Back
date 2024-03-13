import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import { newsRoute } from "./routes/NewsRoute.js";
import { formRoute } from "./routes/FormRoute.js";
import { articleCountModelRoute } from "./routes/ArticleCounterRoute.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/news", newsRoute);
app.use("/upload", formRoute);
app.use("/articleCount", articleCountModelRoute);
app.use("/static", express.static("public"));
app.use("/uploads", express.static("uploads"));


mongoose
  .connect(process.env.DB_KEY)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected!"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
