import { YoutubeLinksModel } from "../model/YoutubeLinksModel.js";

export const getYoutubeLinks = async (req, res) => {
  try {
    const youtubeLink = await YoutubeLinksModel.find({});
    res.send(youtubeLink);
  } catch (error) {
    res.send(error.message);
  }
};
export const getYoutubeLinksById = async (req, res) => {
  try {
    const { id } = req.params;
    const youtubeLink = await YoutubeLinksModel.findById(id);
    res.send(youtubeLink);
  } catch (error) {
    res.send(error.message);
  }
};

export const createYoutubeLink = async (req, res) => {
  try {
    const { title, link } = req.body;

    const newYoutubeLink = new YoutubeLinksModel({
      title,
      link,
    });

    await newYoutubeLink.save();

    res.send("New Youtube Link Posted!");
  } catch (error) {
    res.status(500).send("Error creating youtube link request!");
  }
};
export const updateYoutubeLink = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, link } = req.body;

    const updatedYoutubeLink = await YoutubeLinksModel.findByIdAndUpdate(id, {
      title,
      link,
    });
    res.send("Youtube Link Updated!");
  } catch (error) {
    res.send(error.message);
  }
};
export const deleteYoutubeLink = async (req, res) => {
  try {
    const { id } = req.params;
    const delYoutubeLink = await YoutubeLinksModel.findByIdAndDelete(id);

    res.send("Selected Youtube Link deleted!");
  } catch (error) {
    res.send(error.message);
  }
};
