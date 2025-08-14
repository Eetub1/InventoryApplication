const { updateBook } = require("../controllers/controller")
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

async function updateBookDatabase(originalName, newName, newAuthor, newYear, newPages) {
    await pool.query(`UPDATE books SET book_name = $1, 
                                        author_name = $2,
                                        release_year = $3,
                                        page_count = $4 
                                        WHERE book_name ILIKE $5`, 
                                    [newName, newAuthor, newYear, newPages, originalName])
}

async function addBookToDatabase(newName, newAuthor, newYear, newPages) {
    await pool.query(`INSERT INTO books (book_name, author_name, release_year, page_count)
        VALUES ($1, $2, $3, $4)`, [newName, newAuthor, newYear, newPages])
}

async function deleteBook(bookName) {
    await pool.query(`DELETE FROM books WHERE book_name ILIKE $1`, [bookName])
}

module.exports = {
    getAllBooks,
    getMatchingBooks,
    getAllGenres,
    getBooksByGenre,
    getBookByName,
    updateBookDatabase,
    addBookToDatabase,
    deleteBook
}