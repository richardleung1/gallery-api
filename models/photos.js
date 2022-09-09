const mongoose = require("mongoose");

const photoSchema = new mongoose.Schema({
  _id: Number,
  url: String,
  photographer: String,
  photographer_url: String,
  alt: String,
  src: [String],
  description: String,
});

const Photos = mongoose.model("Photo", photoSchema);

module.exports = Photos;
