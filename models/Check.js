const mongoose = require("mongoose");
const joi = require("joi");
const uniqueValidator = require("mongoose-unique-validator");

//model schema in the schemas folder
const schema = require("../schemas/Check");

// model validation

const CheckValidationSchema = joi.object({
  authToken: joi.string().required(), // auth token of the user
  name: joi.string().required(),
  url: joi.string().required(),
  protocol: joi
    .string()
    .valid("HTTP", "http", "HTTPS", "https", "tcp", "TCP")
    .required(),
  path: joi.string().required(),
  port: joi.number().required(),
  webhook: joi.string(),
  timeout: joi.number().default(5 * 1000),
  interval: joi.number().default(10 * 1000 * 60),
  threshold: joi.number().default(1),
  authentication: joi.object({
    userName: joi.string().required(),
    password: joi.string().required(),
  }),
  httpHeaders: joi.array().items(
    joi.object({
      key: joi.string().required(),
      value: joi.string().required(),
    })
  ),
  assert: joi.object({ statusCode: joi.number() }),
  tags: joi.array().items(joi.string()),
  ignoreSSl: joi.bool().default(false),
});

schema.plugin(uniqueValidator);

module.exports = {
  Check: mongoose.model("Check", schema),
  CheckValidationSchema: CheckValidationSchema,
};