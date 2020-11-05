"use strict";
const booksApi = require("../Products/index");
// const Books = require("../Books/books.model");
const express = require("express");
const router = express.Router();
const {
  addProductValidation,
} = require("../midleware/Product/product.validator");
router.get("/getbooks", booksApi.getAllBooks);
router.post("/addbook", addProductValidation, booksApi.addBooks);
module.exports = router;
