import { Router } from "express";

import {
  createYoutubeLink,
  deleteYoutubeLink,
  getYoutubeLinks,
  getYoutubeLinksById,
  updateYoutubeLink,
} from "../controller/YoutubeLinksController.js";

export const youtubeLinksRoute = Router();

youtubeLinksRoute.get("/", getYoutubeLinks);
youtubeLinksRoute.get("/:id", getYoutubeLinksById);
youtubeLinksRoute.post("/", createYoutubeLink);
youtubeLinksRoute.put("/:id", updateYoutubeLink);
youtubeLinksRoute.delete("/:id", deleteYoutubeLink);
