import { LegislationLawModel } from "../model/LegislationLawModel.js";
import {
  LegislationModel,
} from "../model/LegislationModel.js";

export const getLegislationLaw = async (req, res) => {
  try {
    const legislation = await LegislationLawModel.find({});
    res.send(legislation);
  } catch (error) {
    res.send(error.message);
  }
};
export const getLegislationLawById = async (req, res) => {
  try {
    const { id } = req.params;
    const legislation = await LegislationLawModel.findById(id);
    res.send(legislation);
  } catch (error) {
    res.send(error.message);
  }
};

export const createLegislationLaw = async (req, res) => {
  try {
    if (!req.body ) {
      throw new Error("Missing required data in request body");
    }

    const { legislationId, title, link } = req.body;

    const newLegislation = new LegislationLawModel({
      legislationId,
      title,
      link,
    });

    await newLegislation.save();
    const legislation = await LegislationModel.findById(legislationId);
    legislation.law.push(newLegislation._id);
    legislation.save();
    res.send("New Legislation Law Posted!");
  } catch (error) {
    console.error("Error creating Legislation Law request:", error);
    res.status(500).send("Error creating Legislation Law request!");
  }
};
export const updateLegislationLaw = async (req, res) => {
  try {
    const { id } = req.params;
    const { legislationId, title, link } = req.body;

    const updatedLegislationLaw = await LegislationLawModel.findByIdAndUpdate(
      id,
      {
        legislationId,
        title,
        link,
      }
    );
    res.send("Legislation Law Updated!");
  } catch (error) {
    res.send(error.message);
  }
};
export const deleteLegislationLaw = async (req, res) => {
  try {
    const { id } = req.params;
    const delLegislation = await LegislationLawModel.findByIdAndDelete(id);
    await LegislationModel.updateMany({ law: id }, { $pull: { law: id } });
    res.send("Selected Legistation Law deleted!");
  } catch (error) {
    res.send(error.message);
  }
};
