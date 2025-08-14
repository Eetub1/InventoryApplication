const express = require("express")
const router = express.Router()
const controller = require("../controllers/controller")

router.get("/", controller.getBooks)

router.post("/deleteBook", controller.deleteBook)
router.post("/addBook", controller.addBook)
router.post("/:book", controller.updateBook)

router.get("/:book", controller.getBook)

module.exports = router