const newBookBtn = document.getElementById("new-book-btn")
newBookBtn.addEventListener("click", handleClick)
const addBookDialog = document.getElementById("add-book-dialog")

const addBtn = document.getElementById("add-btn")
addBtn.addEventListener("click", addBook)

function handleClick() {
    addBookDialog.showModal()
}

function addBook(event) {
    addBookDialog.close()
}