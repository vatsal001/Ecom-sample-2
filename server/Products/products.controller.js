const Books = require("./products.model");

exports.getAllBooks = (req, res) => {
  Books.find({}, (err, books) => {
    if (err) {
      return res.status(500).json(err);
    }
    // if () {
    return res.json({ messege: "Successfully got all the books!", books });
    // }
  });
};

exports.addBooks = (req, res) => {
  var new_book = new Books(req.body);
  new_book.save((err, book) => {
    if (err) {
      return res.status(500).json(err);
    }
    //   if () {
    return res
      .status(200)
      .json({ messege: "Added new books to the list!", book });
    //   }
  });
};
