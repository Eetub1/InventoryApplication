const editDialog = document.getElementById("editBookDialog")
const editBookBtn = document.getElementById("edit-book-information")
editBookBtn.addEventListener("click", () => editDialog.showModal())

const sendBtn = document.getElementById("save-changes-btn")
sendBtn.addEventListener("click", () => editDialog.close())

const deleteBookBtn = document.getElementById("delete-book-btn")
deleteBookBtn.addEventListener("click", () => confirmDialog.showModal())

const confirmDialog = document.getElementById("confirm-choice-dialog")
const confirmBtn = document.getElementById("confirm-btn")
const cancelBtn = document.getElementById("cancel-btn")
cancelBtn.addEventListener("click", () => confirmDialog.close())
confirmBtn.addEventListener("click", () => confirmDialog.close())

