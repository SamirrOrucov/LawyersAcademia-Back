import { Router } from "express";
import multer from "multer";
import { fileStorage } from "../middleware/multerStorage.js";
import {
  createForm,
  deleteForm,
  getFormReq,
  getFormReqById,
  updateForm,
} from "../controller/FormController.js";
const upload = multer({ storage: fileStorage });

export const formRoute = Router();

formRoute.get("/", getFormReq);
formRoute.get("/:id", getFormReqById);
formRoute.post("/", upload.single("upload"), createForm);
formRoute.put("/:id", upload.single("upload"), updateForm);
formRoute.delete("/:id", deleteForm);
