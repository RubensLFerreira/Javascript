function carregar() {
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('img');
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if(hora >= 0 && hora < 12) {
        img.src = '1 circle.png'
        document.body.style.backgroundColor = 'rgb(221, 233, 113)'
    } else if (hora >= 12 && hora < 18) {
        img.src = '2 circle.png'
        document.body.style.backgroundColor = 'rgb(133, 133, 250)'
    } else {
        img.src = '3 circle.png'
        document.body.style.backgroundColor = 'rgb(78, 78, 83)'
    }
}