
const button = document.getElementById("myButton")

button.addEventListener("click", function() {

    alert("button clicked")
})

const box = document.getElementById("box")
box.addEventListener("mouseover", function() {
box.style.background = "red"
    
})

box.addEventListener("mouseout", function(){
box.style.background = "blue"

})

const inputField = document.getElementById("inputField")
inputField.addEventListener("keydown", function(event){
    console.log("key pressed", event.key)
})

button.addEventListener("click", function() {
let name = document.getElementById("inputField").value
localStorage.setItem("name", name)
let savedname =  localStorage.getItem("name")
console.log(savedname)
})

const helloButton = document.getElementById("helloButton")
helloButton.addEventListener("click", function() {
console.log("hello world")
alert("HI")

})