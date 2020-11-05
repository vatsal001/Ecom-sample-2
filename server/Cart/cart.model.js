const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cartSchema = new Schema({
  Name: { type: String, required: true },
  image: { type: String, required: true },
  Unit_prize: { type: Number, required: true },
  Quantity: { type: Number, required: true },
});

module.exports = mongoose.model("cart", cartSchema);
