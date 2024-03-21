import { LegislationLawModel } from "../model/LegislationLawModel.js";
import { LegislationModel } from "../model/LegislationModel.js";

export const getLegislation = async (req, res) => {
  try {
    const legislation = await LegislationModel.find({});
    res.send(legislation);
  } catch (error) {
    res.send(error.message);
  }
};
export const getLegislationById = async (req, res) => {
  try {
    const { id } = req.params;
    const legislation = await LegislationModel.findById(id);
    res.send(legislation);
  } catch (error) {
    res.send(error.message);
  }
};

export const getLegislationWithLaws = async (req, res) => {
    try {
        const {id}=req.params
      const legislation = await LegislationLawModel.find({legislationId:id}).populate();
      res.send(legislation);
    } catch (error) {
      res.send(error.message);
    }
  };


export const createLegislation = async (req, res) => {
  try {
    if (!req.body ) {
      throw new Error("Missing required data in request body");
    }

    const { title } = req.body;

    const newLegislation = new LegislationModel({
      title
    });

    await newLegislation.save();

    res.send("New Legislation Posted!");
  } catch (error) {
    console.error("Error creating Legislation request:", error);
    res.status(500).send("Error creating Legislation request!");
  }
};
export const updateLegislation = async (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;

    const updatedArticle = await LegislationModel.findByIdAndUpdate(id, {
      title,
    });
    res.send("Legislation Updated!");
  } catch (error) {
    res.send(error.message);
  }
};
export const deleteLegislation = async (req, res) => {
  try {
    const { id } = req.params;
    const delLegislation = await LegislationModel.findByIdAndDelete(id);

    res.send("Selected Legistation deleted!");
  } catch (error) {
    res.send(error.message);
  }
};
