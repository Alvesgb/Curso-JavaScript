let num = document.getElementById('fnum')
let lista = document.getElementById('flista')
let res = document.getElementById('resultado')
let valores = []

function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}
function inLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else{
        return false
    }
}
function adicionar(){
    if(isNumero(num.value) && !inLista(num.value, valores)){
     valores.push(Number(num.value))
     let item = document.createElement('option')
     item.text = `O valor ${num.value} foi adicionado`
     lista.appendChild(item)
     res.innerHTML = ''
    } else {
        window.alert('Valor invalido ou já adicionado.')
    }
    num.value = ''
    num.focus()
}
function verificar(){
    if(valores.length == 0){
        window.alert("Adicione valores antes de verificar.")
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for(let pos in valores){
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
                menor = valores[pos]
        }
        media = soma / tot

        lista.innerHTML = ''
        valores.length = ''
        res.innerHTML = ''

        res.innerHTML = `<p>Você adicionou ${tot} números.</p>`
        res.innerHTML += `<p>O maior valor adicionado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor adicionado foi ${menor}</p>`
        res.innerHTML += `<p>A soma dos valores são ${soma}</p>`
        res.innerHTML += `<p>A média dos valores são ${media}</p>`
    }
}