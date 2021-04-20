import Joi from 'joi'

const nameRegexp = /^[a-zA-Z0-9]+([_ -]?[a-zA-Z0-9])*$/

const commonValidationFields = {
  firstName: Joi.string()
    .pattern(nameRegexp)
    .required(),

  lastName: Joi.string()
    .pattern(nameRegexp)
    .required(),

  email: Joi.string()
    .email()
    .required(),

  age: Joi.number()
    .integer()
    .min(4)
    .max(130)
    .required(),

  password: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
}

export const createUserValidation = Joi.object({
  ...commonValidationFields
})

export const updateUserValidation = Joi.object({
  id: Joi.number()
    .required(),

  ...commonValidationFields,

  isDeleted: Joi.boolean()
})
