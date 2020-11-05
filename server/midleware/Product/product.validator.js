const { product } = require("./product.schema");

module.exports = {
  addProductValidation: async (req, res, next) => {
    const value = await product.validate(req.body);
    if (value.error) {
      res.json({
        success: 0,
        message: value.error.details[0].message,
      });
    } else {
      next();
    }
  },
};
