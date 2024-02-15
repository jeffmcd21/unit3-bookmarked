
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

// DELETE ROUTE
router.delete("/:id", async (req, res) => {
    try {
        res.json(await Bookmark.findByIdAndDelete(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

// GET ROUTE
router.get("/:id", async (req, res) => {
    try {
        res.json(await Bookmark.findById(req.params.id))
    } catch (error) {
        res.status(400).json(error)
    }
})

// PUT ROUTE
router.put("/:id", async (req, res) => {
    try {
        res.json(await Bookmark.findByIdAndUpdate(req.params.id, req.body))
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = router;