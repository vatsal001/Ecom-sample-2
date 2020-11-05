const joi = require("@hapi/joi");

const schema = {
  product: joi.object({
    title: joi.string().min(5).required(),
    description: joi.string(),
    imageURL: joi.string().required(),
    AutherName: joi.string().required(),
    pageCount: joi.number().required(),
    unit_prize: joi.number().required(),
    isSale: joi.boolean(),
    isNeww: joi.boolean(),
  }),
};
module.exports = schema;
