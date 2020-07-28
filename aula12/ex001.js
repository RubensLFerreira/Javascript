var idade = 66
console.log(`Sua idade é ${idade} anos!`)
if (idade < 16) {
    console.log('Não vota')
} else {
    if(idade >= 16 && idade < 18 || idade > 65) {
        console.log('Voto opcional')
    } else {
        console.log('voto obrigatorio')
    }
}

/* var idade = 2
console.log(`Sua idade é ${idade} anos:`)
if (idade < 12) {
    console.log('Crinça')
} else {
    if (idade > 12 && idade < 18) {
        console.log('adolescente') 
    } else {
        console.log('adulto')
    }
} */