const Joi = require("joi");

const userCreate = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

module.exports = {
  userCreate,
};
