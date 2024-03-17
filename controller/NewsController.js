import { NewsModel } from "../model/NewsModel.js";

export const getAllNews = async (req, res) => {
  try {
    const news = await NewsModel.find({});
    res.send(news);
  } catch (error) {
    res.send(error.message);
  }
};
export const getNewsById = async (req, res) => {
  try {
    const { id } = req.params;
    const news = await NewsModel.findById(id);
    res.send(news);
  } catch (error) {
    res.send(error.message);
  }
};  
export const createNews = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNews = new NewsModel({
      mainImage: req.static
        ? "http://localhost:3003/static/" + req.static
        : null,
      title,
      content,
    });
    await newNews.save();

    res.send("New News Posted!");
  } catch (error) {
    res.send(error.message);
  }
};
export const updateNews = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;

    const updatedNews = await NewsModel.findByIdAndUpdate(id, {
      mainImage: req.static
        ? "http://localhost:3003/static/" + req.static
        : null,
      title,
      content,
    });
    res.send("News Updated!");
  } catch (error) {
    res.send(error.message);
  }
};
export const deleteNews = async (req, res) => {
  try {
    const { id } = req.params;
    const delNews = await NewsModel.findByIdAndDelete(id);

    res.send("Selected news deleted!");
  } catch (error) {
    res.send(error.message);
  }
};
