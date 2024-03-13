import { ArticleCounterModel } from "../model/ArticleCounterModel.js";

export const getArticleCountModel = async (req, res) => {
  try {
    const articleCount = await ArticleCounterModel.find({});
    res.send(articleCount);
  } catch (error) {
    res.send(error.message);
  }
};
export const getArticleCountModelById = async (req, res) => {
  try {
    const { id } = req.params;
    const articleCount = await ArticleCounterModel.findById(id);
    res.send(articleCount);
  } catch (error) {
    res.send(error.message);
  }
};

export const createArticelCount = async (req, res) => {
    try {
      if (!req.body || !req.body.title || !req.body.count) {
        throw new Error("Missing required data in request body");
      }
  
      const { title, count } = req.body;
  
      console.log("Received request with title:", title, "and count:", count);
  
      const newArticleCount = new ArticleCounterModel({
        title,
        count,
      });
  
      await newArticleCount.save();
  
      res.send("New Article Count Posted!");
    } catch (error) {
      console.error("Error creating Article Count request:", error);
      res.status(500).send("Error creating Article Count request!");
    }
  };
export const updateArticleCount = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, count } = req.body;

    const updatedArticle = await ArticleCounterModel.findByIdAndUpdate(id, {
      title,
      count,
    });
    res.send("Article Count Updated!");
  } catch (error) {
    res.send(error.message);
  }
};
export const deleteArticleCount = async (req, res) => {
  try {
    const { id } = req.params;
    const delArticleCount = await ArticleCounterModel.findByIdAndDelete(id);

    res.send("Selected Article Count deleted!");
  } catch (error) {
    res.send(error.message);
  }
};
