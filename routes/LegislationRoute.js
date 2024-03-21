import { Router } from "express";


import { createLegislation, deleteLegislation, getLegislation, getLegislationById, getLegislationWithLaws, updateLegislation } from "../controller/LegislationController.js";

export const legislationRoute = Router();

legislationRoute.get("/", getLegislation);
legislationRoute.get("/:id", getLegislationById);
legislationRoute.get("/withLaws/:id", getLegislationWithLaws);
legislationRoute.post("/", createLegislation);
legislationRoute.put("/:id", updateLegislation);
legislationRoute.delete("/:id", deleteLegislation);
