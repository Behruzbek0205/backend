const Joi = require("joi");

const registerValidationScheme = Joi.object({
  username: Joi.string().min(3).max(30).required().trim(),
  password: Joi.string()
    .min(3)
    .max(30)
    .required()
    .pattern(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/
    ),
  firstname: Joi.string(),
  lastname: Joi.string(),
  birthday: Joi.string(),
  gender: Joi.string().optional(),
  address: Joi.string(),
  phone: Joi.string().pattern(/^\+998\d{9}$/),
});

const updateUserValidationScheme = Joi.object({
  username: Joi.string().min(3).max(30).required().trim(),
  password: Joi.string()
    .optional()
    .min(8)
    .max(30)
    .pattern(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/
    ),
  firstname: Joi.string(),
  lastname: Joi.string(),
  birthday: Joi.string(),
  gender: Joi.string().optional(),
  address: Joi.string(),
  phone: Joi.string().pattern(/^\+998\d{9}$/),
});

module.exports = {
  registerValidationScheme,
  updateUserValidationScheme,
};
