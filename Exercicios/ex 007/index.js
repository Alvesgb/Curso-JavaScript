var idade = 16
console.log(`Você tem ${idade} anos.`)
if (idade < 16){
    console.log('Você não pode votar.')
} else if (idade < 18){
        console.log('Seu voto é opcional.')
} else if (idade > 65){
    console.log('Seu voto é opcional.')
} else if (idade >18){
    console.log('Seu voto é obrigatório.')
}