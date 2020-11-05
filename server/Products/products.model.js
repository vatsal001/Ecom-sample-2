const mongoose = require("mongoose");
let Schema = mongoose.Schema;
const booksSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String },
  imageURL: { type: String, required: true },
  AutherName: { type: String, required: true },
  pageCount: { type: Number, required: true },
  unit_prize: { type: Number, required: true },
  isSale: { type: Boolean },
  isNeww: { type: Boolean },
});

module.exports = mongoose.model("books", booksSchema);
