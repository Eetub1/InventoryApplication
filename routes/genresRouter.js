const express = require("express")
const router = express.Router()
const controller = require("../controllers/controller")

router.get("/", controller.getGenres)
router.get("/:genre", controller.getBooksByGenre)

module.exports = router