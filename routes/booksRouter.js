const express = require("express")
const router = express.Router()
const controller = require("../controllers/controller")

router.get("/", controller.getBooks)
router.get("/:book", controller.getBook)

module.exports = router