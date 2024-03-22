import { Router } from "express";
import { teamStorage } from "../middleware/multerStorage.js";
import multer from "multer";
import {
  createTeamMember,
  deleteTeamMember,
  getAllTeam,
  getTeamMemberById,
  updateTeamMember,
} from "../controller/TeamController.js";
export const teamRouter = Router();
const upload = multer({ storage: teamStorage });

teamRouter.get("/", getAllTeam);
teamRouter.get("/:id", getTeamMemberById);
teamRouter.post("/", upload.single("profilePhoto"), createTeamMember);
teamRouter.put("/:id", upload.single("profilePhoto"), updateTeamMember);
teamRouter.delete("/:id", deleteTeamMember);
