
function carregar(){
    var msg1 = window.document.getElementById('msg1')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hr = 16
    var mn = data.getMinutes()
    msg1.innerHTML = `Agora são ${hr}:${mn}`

    if (hr >= 0 && hr < 12) {
        img.src = 'img/manha.png'
        msg2.innerHTML = `Bom dia!`
        document.body.style.backgroundColor = '#cfb2a0'
    } else if(hr >=12 && hr <18){
        img.src = 'img/tarde.png'
        msg2.innerHTML = `Boa tarde!`
        document.body.style.backgroundColor = '#845032'
    } else{
        img.src =  'img/noite.png'
        msg2.innerHTML = `Boa noite!`
        document.body.style.backgroundColor = '#5d6c97'
    }
}