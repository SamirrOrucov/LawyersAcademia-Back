import { Router } from "express";
import multer from "multer";
import {
  createNews,
  deleteNews,
  getAllNews,
  getNewsById,
  updateNews,
} from "../controller/NewsController.js";
import { storage } from "../middleware/multerStorage.js";

const upload = multer({ storage: storage });

export const newsRoute = Router();

newsRoute.get("/", getAllNews);
newsRoute.get("/:id", getNewsById);
newsRoute.post("/", upload.single('avatar'), createNews);
newsRoute.put("/:id", upload.single('avatar'), updateNews);
newsRoute.delete("/:id", deleteNews);