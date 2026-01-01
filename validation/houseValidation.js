const Joi = require("joi");

const houseValidationshceme = Joi.object({
  location: Joi.string().min(3).max(30).required().trim(),
  region: Joi.string(),
  city: Joi.string(),
  street: Joi.string(),
  family_members: Joi.string().optional(),
  house_number: Joi.string(),
});

const houseupdateValidationshceme = Joi.object({
  location: Joi.string().min(3).max(30).required().trim(),
  region: Joi.string(),
  city: Joi.string(),
  street: Joi.string(),
  family_members: Joi.string().optional(),
  house_number: Joi.string(),
});

module.exports = {
  houseValidationshceme,
  houseupdateValidationshceme,
};
