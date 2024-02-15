
// ~ // --------------- DEPENDENCIES --------------- // ~ //
require("dotenv").config();
const express = require("express");



const app = express();


// ~ // --------------- MAIN ROUTE --------------- // ~ //
app.get("/", (req, res) => {
    res.send(`Swimming @ seaPort...${PORT}`);
  });


// ~ // --------------- SERVER LISTENER --------------- // ~ //
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Swimming @ seaPORT ${PORT}`));