
// ~ // --------------- DEPENDENCIES --------------- // ~ //
require("dotenv").config();
const express = require("express");
const mongoose = require("./models/connection");
const cors = require("cors");
const morgan = require("morgan");

const app = express();


// ~ // --------------- MIDDLEWARE --------------- // ~ //
app.use(cors())
app.use(morgan("dev"))
app.use(express.json())


// ~ // --------------- MAIN ROUTE --------------- // ~ //
app.get("/", (req, res) => {
    res.send(`Swimming @ seaPort...${PORT}`);
  });


// ~ // --------------- SERVER LISTENER --------------- // ~ //
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Swimming @ seaPORT ${PORT}`));