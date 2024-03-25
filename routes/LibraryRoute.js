import { Router } from "express";
import multer from "multer";
import {
  bookFileStorage,
  bookPhotoStorage,
} from "../middleware/multerStorage.js";
import {
  createBook,
  deleteBook,
  getBookById,
  getBooks,
  updateBook,
} from "../controller/LibraryController.js";
export const bookRouter = Router();
const bookFileStorages = multer({ storage: bookFileStorage }).fields([
  { name: "bookFiles", maxCount: 1 },
  { name: "bookPhotos", maxCount: 1 },
]);

bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBookById);

bookRouter.post("/", bookFileStorages, createBook);
bookRouter.put("/:id", bookFileStorages, updateBook);
bookRouter.delete("/:id", deleteBook);
