import { TeamModel } from "../model/TeamModel.js";

export const getAllTeam = async (req, res) => {
  try {
    const team = await TeamModel.find({});
    res.send(team);
  } catch (error) {
    res.send(error.message);
  }
};
export const getTeamMemberById = async (req, res) => {
  try {
    const { id } = req.params;
    const teamMember = await TeamModel.findById(id);
    res.send(teamMember);
  } catch (error) {
    res.send(error.message);
  }
};
export const createTeamMember = async (req, res) => {
  try {
    const { name, role, phone, email } = req.body;
    const newTeamMember = await TeamModel({
      profilImage: req.teams ? "http://localhost:3003/team/" + req.teams : null,
      name,
      role,
      phone,
      email,
    });
    console.log(req.teams);
    console.log(req.file);

    await newTeamMember.save();
    res.send("Team member created!");
  } catch (error) {
    res.send(error.message);
  }
};
export const updateTeamMember = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, role, phone, email } = req.body;
    const updateTeamMember = await TeamModel.findByIdAndUpdate(id, {
      profilImage: req.teams ? "http://localhost:3003/team/" + req.teams : null,
      name,
      role,
      phone,
      email,
    });
    res.send("Team member updated!");
  } catch (error) {
    res.send(error.message);
  }
};
export const deleteTeamMember = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedNews = await TeamModel.findByIdAndDelete(id);
    res.send("Team member removed succesfully!");
  } catch (error) {
    res.send(error.message);
  }
};
