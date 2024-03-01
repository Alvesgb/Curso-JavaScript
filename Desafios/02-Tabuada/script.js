function tabuada(){
    var fnum = document.getElementById('inum')
    var tab = document.getElementById('itab')
    
    if (fnum.value.length <= -100 || fnum.value > 100) {
        window.alert('Erro, por favor digite um número entre -100 e 100')
    } else{
        var n = Number(fnum.value)
        var c = 1
        tab.innerHTML = ''
        while(c <= 10){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}