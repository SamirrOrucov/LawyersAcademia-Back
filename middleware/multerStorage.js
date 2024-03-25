import multer from "multer";
import path from "path";
import { fileURLToPath } from "url";
import * as fs from "fs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const createDirectorySync = (dirPath, options, callback) => {
  if (typeof options === "function") {
    callback = options;
    options = {};
  }

  if (fs.existsSync(dirPath)) {
    return callback();
  }

  fs.mkdirSync(dirPath, options);
  callback();
};
export const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "public");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    req.static = uniqueSuffix + ".png";
    cb(null, uniqueSuffix + ".png");
  },
});
export const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});
export const teamStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "team");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    req.teams = uniqueSuffix + ".png";
    cb(null, uniqueSuffix + ".png");
  },
});

export const bookFileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const destinationPath = path.join(__dirname, "..", "books");
    createDirectorySync(destinationPath, (err) => {
      if (err) {
        return cb(err);
      }
      cb(null, destinationPath);
    });
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + ext);
  },
});

export const bookPhotoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    const destinationPath = path.join(__dirname, "..", "bookPhoto");
    createDirectorySync(destinationPath, (err) => {
      if (err) {
        return cb(err);
      }
      cb(null, destinationPath);
    });
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    cb(null, Date.now() + "-" + Math.round(Math.random() * 1e9) + ext);
  },
});