const express = require("express")
const app = express()
require("dotenv").config()

const indexRouter = require("./routes/indexRouter.js")
const booksRouter = require("./routes/booksRouter.js")

app.use(express.static("public"))
app.set("view engine", "ejs")
app.use(express.urlencoded({ extended: true }))

app.use("/", indexRouter)
app.use("/books", booksRouter)

const PORT = process.env.PORT || 3001
app.listen(PORT, () => console.log(`Express app listening on port ${PORT}!`))