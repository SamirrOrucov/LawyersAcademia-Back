import { Router } from "express";
import {
  createLegislationLaw,
  deleteLegislationLaw,
  getLegislationLaw,
  getLegislationLawById,
  updateLegislationLaw,
} from "../controller/LegislationLawController.js";

export const legislationLawRoute = Router();

legislationLawRoute.get("/", getLegislationLaw);
legislationLawRoute.get("/:id", getLegislationLawById);
legislationLawRoute.post("/", createLegislationLaw);
legislationLawRoute.put("/:id", updateLegislationLaw);
legislationLawRoute.delete("/:id", deleteLegislationLaw);
