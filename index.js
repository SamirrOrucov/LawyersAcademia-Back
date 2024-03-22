import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import cors from "cors";
import { newsRoute } from "./routes/NewsRoute.js";
import { formRoute } from "./routes/FormRoute.js";
import { articleCountModelRoute } from "./routes/ArticleCounterRoute.js";
import { youtubeLinksRoute } from "./routes/YoutubeLinksRoute.js";
import { legislationRoute } from "./routes/LegislationRoute.js";
import { legislationLawRoute } from "./routes/LegislationLawRoute.js";
import { teamRouter } from "./routes/TeamRoute.js";
const app = express();
app.use(express.json());
app.use(cors());
app.use("/news", newsRoute);
app.use("/upload", formRoute);
app.use("/articleCount", articleCountModelRoute);
app.use("/youtubeLinks", youtubeLinksRoute);
app.use("/legislation", legislationRoute);
app.use("/legislationLaw", legislationLawRoute);
app.use("/teams", teamRouter);
app.use("/static", express.static("public"));
app.use("/uploads", express.static("uploads"));
app.use("/team", express.static("team"));

mongoose
  .connect(process.env.DB_KEY)
  .then(() => console.log("Connected!"))
  .catch(() => console.log("Not Connected!"));

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
