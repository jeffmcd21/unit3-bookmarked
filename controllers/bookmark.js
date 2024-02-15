
// ~ // --------------- DEPENDENCIES --------------- // ~ //
const express = require("express");
const Bookmark = require("../models/Bookmark");

const router = express.Router();


// ~ // --------------- ROUTES --------------- // ~ //
// INDEX ROUTE
router.get("/", async (req, res) => {
    try {
        res.json(await Bookmark.find({}))

    } catch (error) {
        res.status(400).json(error);

    }
});

// CREATE ROUTE
router.post("/", async (req, res) => {
    try {
        res.json(await Bookmark.create(req.body))
    } catch (error) {
        res.status(400).json(error)
    }
});




module.exports = router;