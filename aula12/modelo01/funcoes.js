var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
var hora = data.getHours()

function carregar() {
    if(hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#8fd1fb'
        msg.innerHTML = `Bom dia! Agora são ${hora} horas`
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#ffae43'
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas`
    } else {
        img.src = 'fotonoite.png'
        document.body.style.background = '#152440'
        msg.innerHTML = `Boa noite! Agora são ${hora} horas`
    }
}


