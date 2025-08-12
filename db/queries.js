const pool = require("./pool")

async function getAllBooks() {
    const {rows} = await pool.query("SELECT * FROM books")
    return rows
}

async function getMatchingBooks(searchTerm) {
    const {rows} = await pool.query(
      "SELECT * FROM books WHERE book_name ILIKE $1",[`%${searchTerm}%`])
    return rows 
}

async function getAllGenres() {
    const {rows} = await pool.query("SELECT genre_name FROM genres")
    return rows 
}

async function getBooksByGenre(genre) {
    const {rows} = await pool.query(`SELECT b.book_id,
                                        b.book_name,
                                        b.author_name,
                                        b.release_year,
                                        b.page_count
                                    FROM books b
                                    JOIN book_genres bg ON b.book_id = bg.book_id
                                    JOIN genres g ON bg.genre_id = g.genre_id
                                    WHERE g.genre_name ILIKE $1`,
                                    [genre]
                                )
    return rows
}

async function getBookByName(name) {
    const {rows} = await pool.query(`SELECT * FROM books WHERE book_name ILIKE $1`, [name])
    return rows[0]
}

module.exports = {
    getAllBooks,
    getMatchingBooks,
    getAllGenres,
    getBooksByGenre,
    getBookByName
}