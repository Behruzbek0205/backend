const Joi = require("joi");

const productValidationshceme = Joi.object({
  name: Joi.string().min(3).max(30).required().trim(),
  price: Joi.number(),
  description: Joi.string().min(3).max(50),
  image: Joi.string(),
  count: Joi.number(),
});

const productupdateValidationshceme = Joi.object({
  name: Joi.string().min(3).max(30).required().trim(),
  price: Joi.number(),
  description: Joi.string().min(3).max(50),
  image: Joi.string(),
  count: Joi.number(),
});

module.exports = {
  productValidationshceme,
  productupdateValidationshceme,
};
