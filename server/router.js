const { Router } = require("express");
const Book = require("./models");
const multer = require("multer");
const router = new Router();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./server/files");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/jpeg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

router.post(
  "/books",
  multer({ storage, fileFilter }).single("logoFile"),
  async (req, res, next) => {
    try {
      const book = await Book.create({
        label: req.body.label,
        author: req.body.author,
        description: req.body.description,
        logo: req.file && req.file.path || req.body.logo,
      });
      if (!book) {
        throw new Error("something went wrong");
      }

      res.status(201).json({ book });
    } catch (e) {
      next(e);
    }
  }
);

router.put("/books/:id", multer({ storage, fileFilter }).single("logoFile"),async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      throw new Error("book is not found ");
    }
    const { label, author, logo, description } = req.body;

    book.label = label ? label : book.label;
    book.author = author ? author : book.author;
    book.logo = logo ? req.file.path || req.body.logo : book.logo;
    book.description = description ? description : book.description

    await book.save();

    res.status(201).json({ book });
  } catch (e) {
    next(e);
  }
});

router.get("/books/:id", async (req, res, next) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      throw new Error("book is not found ");
    }
    res.status(200).json({ book });
  } catch (e) {
    next(e);
  }
});

router.get("/books", async (req, res, next) => {
  try {
    const books = await Book.find();
    if (!books.length) {
      throw new Error("book is not found");
    }
    res.status(200).json({ books });
  } catch (e) {
    next(e);
  }
});

router.delete("/books/:id", async (req, res, next) => {
  try {
    await Book.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: "deleted successful" });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
