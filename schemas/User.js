const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  userName: { type: String, unique: true, required: true },
  email: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  verified: { type: Boolean, default: false },
  checks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Check" }],
});

module.exports = schema;
