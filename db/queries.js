const pool = require("./pool")

async function getAllBooks() {
    const {rows} = await pool.query("SELECT * FROM books")
    return rows
}

async function getMatchingBooks(searchTerm) {
    const { rows } = await pool.query(
      "SELECT * FROM books WHERE book_name ILIKE $1",[`%${searchTerm}%`])
    return rows 
}

async function getAllGenres() {
    const { rows } = await pool.query("SELECT genre_name FROM genres")
    return rows 
}

module.exports = {
    getAllBooks,
    getMatchingBooks,
    getAllGenres
}