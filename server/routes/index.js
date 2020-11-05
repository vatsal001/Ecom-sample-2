const booksRoutes = require("./books.routes");
const cartRoutes = require("./cart.routes");
const init = (app) => {
  app.use("/api/books", booksRoutes);
  app.use("/api/carts", cartRoutes);
};
module.exports = { init };
