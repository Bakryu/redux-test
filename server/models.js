const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// установка схемы
const Book = new Schema({
  label: String,
  author: String,
  logo: String,
});
module.exports = mongoose.model("Book", Book);
