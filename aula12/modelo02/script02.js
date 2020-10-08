function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') //add na var o input de idade
    var res = document.querySelector('div#res') // add na var o resultado
    if (fano.value.length == 0 || Number(fano.value) >= ano) { //para que nn posso add numero 0 ou maior que o ano atual
        window.alert('[erro] verifique os dados!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto') //criando uma tag com id foto pelo js

        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute = ('src', 'fotobebe-m.png')
            } else if (idade >= 10 && idade <18 ) {
                //adolescente
                img.setAttribute = ('src', 'fotocrianca-m.png')
            } else if (idade >= 18 && idade < 50) {
                //adulto
                img.setAttribute = ('src', 'fotoadulto-m.png')
            } else {
                //idoso
                img.setAttribute = ('src', 'fotoidoso-m.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if (idade >=0 && idade < 10) {
                //criança
                img.setAttribute = ('src', 'fotobebe-f.png')
            } else if (idade >= 10 && idade <18 ) {
                //adolescente
                img.setAttribute = ('src', 'fotocrianca-f.png')
            } else if (idade >= 18 && idade < 50) {
                //adulto
                img.setAttribute = ('src', 'fotoadulto-f.png')
            } else {
                //idoso
                img.setAttribute = ('src', 'fotoidoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img) //add um elemento, no img
    }
   
}

