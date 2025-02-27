

console.log("server online")
const name = document.getElementById("inputName").value
const saveButton = document.getElementById("saveButton")
saveButton.addEventListener("click", function(){
    let name = document.getElementById("inputName").value
    let showName = document.getElementById("username")
    showName.innerHTML = "תודה " + name + "על שנרשמת"
    saveButton.style.visibility = "hidden"
    name.style.visibility = "hidden"

    if (name =="") {
        showName.innerHTML = "שם לא תקין"
        saveButton.style.visibility = "visible"
name.style.visibility = "visible"
    }
})
