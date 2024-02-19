var agora = new Date()
var horario = agora.getHours()

    console.log(`Agora são: ${horario} horas`)
if (horario <= 5){
    console.log('Vá dormir kpeta!')
} else if (horario <= 12){
    console.log(`Bom dia!`)
} else if (horario <= 18){
    console.log(`Boa tarde!`)
} else if (horario <= 24){
    console.log('Boa noite!')
}