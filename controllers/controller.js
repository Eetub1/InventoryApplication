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
    //res.send(genres.map(genre => genre.genre_name).join(", "))
}

module.exports = {
    getHomePage,
    getBooks,
    getGenres
}