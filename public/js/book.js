//make the password handling a serverside thing
const password = "salsasana"

const passwordDialog = document.getElementById("check-password-dialog")
const checkPasswordBtn = document.getElementById("check-password-btn")

const closePasswordDialogBtn = document.getElementById("password-dialog-close-btn")

//Edit dialog
const editDialog = document.getElementById("editBookDialog")
const editBookBtn = document.getElementById("edit-book-information")
editBookBtn.addEventListener("click", () => editDialog.showModal())

const sendBtn = document.getElementById("save-changes-btn")
sendBtn.addEventListener("click", () => editDialog.close())

const cancelChangesBtn = document.getElementById("cancel-changes-btn")
cancelChangesBtn.addEventListener("click", () => editDialog.close())

checkPasswordBtn.addEventListener("click", verifyPassword)
closePasswordDialogBtn.addEventListener("click", () => passwordDialog.close())

//Delete dialog
const confirmDialog = document.getElementById("confirm-choice-dialog")
const deleteBookBtn = document.getElementById("delete-book-btn")
deleteBookBtn.addEventListener("click", () => passwordDialog.showModal())

const confirmBtn = document.getElementById("confirm-btn")
confirmBtn.addEventListener("click", () => confirmDialog.close())

const cancelBtn = document.getElementById("cancel-btn")
cancelBtn.addEventListener("click", () => confirmDialog.close())

function verifyPassword(event) {
    event.preventDefault()
    const inputValue = document.forms.passwordForm.password.value
    
    if (inputValue === password) {
        confirmDialog.showModal()
    }
}
