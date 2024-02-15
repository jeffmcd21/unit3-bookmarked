
// ~ // --------------- DEPENDENCIES --------------- // ~ //
require("dotenv").config();
const mongoose = require("mongoose");

// ~ // --------------- DATABASE CONNECTION --------------- // ~ //
mongoose.connect(process.env.DATABASE_URL)

mongoose.connection
  .on("open", () => console.log("Mingo Mango Mongo"))
  .on("close", () => console.log("Mongoose Down"))
  .on("error", (error) => console.log(error));

module.exports = mongoose;