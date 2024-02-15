
// ~ // --------------- DEPENDENCIES --------------- // ~ //
const mongoose = require("./connection");

// ~ // --------------- MODELS --------------- // ~ //
const BookmarkSchema = new mongoose.Schema({
    title: String,
    url: String
  });

const Bookmark = mongoose.model("Bookmark", BookmarkSchema);

module.exports = Bookmark;