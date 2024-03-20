let titulo = document.querySelector("#titulo")
let paragrafo = document.querySelector("#paragrafo")

titulo.addEventListener("mouseover", function(){

    paragrafo.style.display = "block"
    this.style.backgroundColor = "rgba(0, 132, 255)"
    this.style.transition = "all 0.5s"
})

titulo.addEventListener("mouseout", function(){

    paragrafo.style.display = "none"
    this.style.backgroundColor = "rgba(107, 168, 226, 0.700)"
    this.style.transition = "all 0.5s"
})