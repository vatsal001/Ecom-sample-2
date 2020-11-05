const joi = require("@hapi/joi");

const schema = {
  cart: joi.object({
    Name: joi.string().min(5).required(),
    image: joi.string().required(),
    Unit_prize: joi.number().required(),
    Quantity: joi.number().required(),
  }),
};
module.exports = schema;
