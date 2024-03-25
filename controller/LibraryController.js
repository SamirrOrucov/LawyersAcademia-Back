import { LibraryModel } from "../model/LibraryModel.js";

export const getBooks = async (req, res) => {
  try {
    const books = await LibraryModel.find({});
    res.send(books);
  } catch (error) {
    res.send(error.message);
  }
};
export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await LibraryModel.findById(id);
    res.send(book);
  } catch (error) {
    res.send(error.message);
  }
};
export const createBook = async (req, res) => {
  try {
    const { title, description, author, year } = req.body;

    const bookFiles = req.files?.bookFiles;
    const bookPhotos = req.files?.bookPhotos;

    const newBook = new LibraryModel({
      title,
      description,
      author,
      year,
      bookFile: bookFiles
        ? "http://localhost:3003/books/" + (bookFiles[0] ? bookFiles[0].filename : null)
        : null,
      bookPhoto: bookPhotos
        ? "http://localhost:3003/books/" + (bookPhotos[0] ? bookPhotos[0].filename : null)
        : null,
    });

    await newBook.save();

    res.send("New Book Posted!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating Book!");
  }
};

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, author, year } = req.body;
    const bookFiles = req.files?.bookFiles;
    const bookPhotos = req.files?.bookPhotos;

    const updatedBook = await LibraryModel.findByIdAndUpdate(id, {
      bookFile: bookFiles
        ? "http://localhost:3003/books/" + bookFiles.filename
        : null,
      bookPhoto: bookPhotos
        ? "http://localhost:3003/bookPhoto/" + bookPhotos.filename
        : null,
      title,
      description,
      author,
      year,
    });

    res.send("Book Updated!");
  } catch (error) {
    res.send(error.message);
  }
};
export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const delBook = await LibraryModel.findByIdAndDelete(id);

    res.send("Selected Book deleted!");
  } catch (error) {
    res.send(error.message);
  }
};
