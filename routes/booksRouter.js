const express = require("express")
const router = express.Router()
const controller = require("../controllers/controller")

router.get("/", controller.getBooks)

//related to book.ejs should update a book in the database
router.post("/", controller.updateBook)

router.get("/:book", controller.getBook)

module.exports = router