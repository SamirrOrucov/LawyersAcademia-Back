import { Router } from "express";
import {
  createArticelCount,
  deleteArticleCount,
  getArticleCountModel,
  getArticleCountModelById,
  updateArticleCount,
} from "../controller/ArticleCounterController.js";

export const articleCountModelRoute = Router();

articleCountModelRoute.get("/", getArticleCountModel);
articleCountModelRoute.get("/:id", getArticleCountModelById);
articleCountModelRoute.post("/", createArticelCount);
articleCountModelRoute.put("/:id", updateArticleCount);
articleCountModelRoute.delete("/:id", deleteArticleCount);
