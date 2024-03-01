function parimpar(){
    var fnum = document.getElementById('inum')
    var res = document.getElementById('resultado')
    var n = Number(fnum.value)

    if (n%2 ==0) {
        res.innerHTML = `O número ${n} é Par!`
    } else {
        res.innerHTML = `O número ${n} é Impar!`
    }

}