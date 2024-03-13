import { FormModel } from "../model/FormModel.js";
import { NewsModel } from "../model/NewsModel.js";

export const getFormReq = async (req, res) => {
  try {
    const form = await FormModel.find({});
    res.send(form);
  } catch (error) {
    res.send(error.message);
  }
};
export const getFormReqById = async (req, res) => {
  try {
    const { id } = req.params;
    const form = await FormModel.findById(id);
    res.send(form);
  } catch (error) {
    res.send(error.message);
  }
};
export const createForm = async (req, res) => {
  try {
    const { email, number, content, username } = req.body;

    const newFormReq = new FormModel({
      email,
      number,
      content,
      username,
      file: req.file
        ? "http://localhost:3003/uploads/" + req.file.filename
        : null,
    });

    await newFormReq.save();

    res.send("New Form Request Posted!");
  } catch (error) {
    console.error(error); 
    res.status(500).send("Error creating form request!");
  }
};
export const updateForm = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, number, content, username } = req.body;

    const updatedForm = await FormModel.findByIdAndUpdate(id, {
      file: req.file
        ? "http://localhost:3003/uploads/" + req.file.filename
        : null,

      email,
      number,
      content,
      username,
    });
    res.send("Form Updated!");
  } catch (error) {
    res.send(error.message);
  }
};
export const deleteForm = async (req, res) => {
  try {
    const { id } = req.params;
    const delForm = await FormModel.findByIdAndDelete(id);

    res.send("Selected form deleted!");
  } catch (error) {
    res.send(error.message);
  }
};
