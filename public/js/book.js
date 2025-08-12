const editBookBtn = document.getElementById("edit-book-information")
editBookBtn.addEventListener("click", handleClick)
const editDialog = document.getElementById("editBookDialog")

const sendBtn = document.getElementById("save-changes-btn")
sendBtn.addEventListener("click", saveChanges)

function handleClick() {
    editDialog.showModal()
}

function saveChanges(event) {
    event.preventDefault()
    editDialog.close()
}

