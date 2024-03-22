import multer from "multer";
import path from "path";
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
