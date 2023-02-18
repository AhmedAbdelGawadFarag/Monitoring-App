const { User, UserValidationSchema } = require("../models/User");
const { sendVEmail } = require("../services/mailer");

const getUser = (req, res) => {
  res.end("hello ooooo");
};

// sends email confirmation
const createUser = async (req, res) => {
  res.setHeader("content-type", "application/json");
  const { error, value } = UserValidationSchema.validate(req.body, {
    abortEarly: false,
  });

  if (error) {
    let errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json(errorMessages);
  }

  // check if we can save the user
  try {
    let usr = new User(req.body);
    await usr.save();
    console.log(usr);

    await sendVEmail(usr);

    return res.status(200).json(usr);
  } catch (err) {
    return res.status(400).json(err);
  }
};

module.exports = {
  getUser,
  createUser,
};
