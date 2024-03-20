const click = document.querySelector("#click")
const dblclick = document.querySelector("#dblclick")

const pr1 = document.querySelector("#pr1")
const pr2 = document.querySelector("#pr2")

const fec1 = document.querySelector("#fec1")
const fec2 = document.querySelector("#fec2")

click.addEventListener("click", function(){

    pr1.style.display = "block"
    fec1.style.display = "block"
})
fec1.addEventListener("click", function(){
    pr1.style.display = "none"
    fec1.style.display = "none"
})

dblclick.addEventListener("dblclick", function(){
    pr2.style.display = "block"
    fec2.style.display = "block"
})
fec2.addEventListener("click", function(){
    pr2.style.display = "none"
    fec2.style.display = "none"
})