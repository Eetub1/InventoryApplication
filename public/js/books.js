const newBookBtn = document.getElementById("new-book-btn")
newBookBtn.addEventListener("click", () => addBookDialog.showModal())
const addBookDialog = document.getElementById("add-book-dialog")

const addBtn = document.getElementById("add-btn")
addBtn.addEventListener("click", () => addBookDialog.close())

const cancelBtn = document.getElementById("cancel-book-add-btn")
cancelBtn.addEventListener("click", () => addBookDialog.close())