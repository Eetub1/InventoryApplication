const pool = require("./pool")

async function getAllBooks() {
    const {rows} = await pool.query("SELECT * FROM books")
    return rows
}

async function getMatchingBooks(searchTerm) {
    const { rows } = await pool.query(
      "SELECT * FROM books WHERE author_name ILIKE $1",[`%${searchTerm}%`])
    return rows 
}

module.exports = {
    getAllBooks,
    getMatchingBooks
}