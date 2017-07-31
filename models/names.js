const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const Name = new Schema({
  year: Number,
  name: String,
  sex: String,
  occurrences: Number
});

module.exports = mongoose.model("Name", Name);
