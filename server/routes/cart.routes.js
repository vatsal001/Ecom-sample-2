"use strict";
const cartApi = require("../Cart/index");
const express = require("express");
const { addCartValidation } = require("../midleware/Cart/cart.validator");
const router = express.Router();
router.get("/cart", cartApi.getCartDetails);
router.post("/add", addCartValidation, cartApi.addItem);
router.put("/cart/:cartId", cartApi.updateCart);
module.exports = router;
