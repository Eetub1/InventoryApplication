const db = require("../db/queries")

async function getHomePage(req, res) {
    res.render("homepage")
}

async function getAllBooks(req, res) {
    //query the database and get all books here and return them
    //res.send("All books should be shown here, work under progress")
    //res.render("books")
    books = await db.getAllBooks()
    res.render("books", {books: books})
    //res.send(books.map(book => book.book_name).join(", "))
}

module.exports = {
    getHomePage,
    getAllBooks
}