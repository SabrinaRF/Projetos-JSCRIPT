function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 1   
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 8 && hora < 12) {
        
        msg.innerHTML += '<p>Bom Dia!</p>'
        img.src = 'manha.png'
        document.body.style.background = '#e9dba6'
    } else if (hora >= 12 && hora < 18) {
        
        msg.innerHTML += '<p>Boa Tarde!</p>'
        img.src = 'tarde.png'
        document.body.style.background = '#95e0ca'
    } else {
        
        msg.innerHTML += '<p>Boa Noite<p>'
        img.src = 'noite.png'
        document.body.style.background = '#403079'
    }
}


