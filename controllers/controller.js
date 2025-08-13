const db = require("../db/queries")

async function getHomePage(req, res) {
    res.render("homepage")
}

async function getBooks(req, res) {
    const searchTerm = req.query.search || null
    let books
    if (searchTerm) {
        books = await db.getMatchingBooks(searchTerm)
    } else {
        books = await db.getAllBooks()
    }
    res.render("books", {books: books})
}

async function getGenres(req , res) {
    const genres = await db.getAllGenres()
    res.render("genres", {genres: genres})
}

async function getBooksByGenre(req, res) {
    const genre = req.params.genre
    const books = await db.getBooksByGenre(genre)
    res.render("books", {books: books})
}

async function getBook(req, res) {
    const bookName = req.params.book
    const book = await db.getBookByName(bookName)
    //console.log(book);
    if (!book) {
        return res.status(404).send("Book not found");
    }
    res.render("book", {book})
}

async function updateBook(req, res) {
    const urlBookName = req.params.book
    const {book_name, author_name, release_year, page_count} = req.body
    await db.updateBookDatabase(urlBookName, book_name, author_name, release_year, page_count)
    res.redirect("/books")
}

module.exports = {
    getHomePage,
    getBooks,
    getGenres,
    getBooksByGenre,
    getBook,
    updateBook
}