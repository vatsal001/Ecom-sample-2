const Cart = require("./cart.model");

exports.getCartDetails = (req, res) => {
  Cart.find({}, (err, Cart) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res.json({ messege: "Successfully got all the items !", Cart });
  });
};

exports.addItem = (req, res) => {
  var new_item = new Cart(req.body);
  new_item.save((err, item) => {
    if (err) {
      return res.status(500).json(err);
    }
    return res
      .status(200)
      .json({ messege: "Added new item to the cart!", item });
  });
};
exports.updateCart = function (req, res) {
  var id = req.params.cartId;
  Cart.updateOne({ _id: id }, req.body, { new: true }, (err, item) => {
    if (err) {
      return res.status(500).json(err);
    }
    if (!req.body.item) {
      return res
        .status(404)
        .json({ messege: "Add item to the cart!", success: false });
    }
    if (!req.body) {
      return res.status(404).json({
        message: "this item cannot be empty!",
        success: false,
      });
    }
    return res.status(200).json({ messege: "Successfully added!", item });
  });
};
