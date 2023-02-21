function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML = `Idade Carlculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id','foto')

         if (fsex [0].checked) {

            genero = 'Homem'
            if (idade >=0 && idade < 10 ) {
                //res.innerHTML = ``
                img.setAttribute('src', 'homemcrianca.png')
            } else if (idade < 21) {
                
                img.setAttribute('src', 'homemjovem.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'homemadulto.png')
            } else {
                
                img.setAttribute('src', 'homemidoso.png')
            }

         } else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >=0 && idade < 10 ) {
                //res.innerHTML = ``
                img.setAttribute('src', 'mulhercrianca.png')
            } else if (idade < 21) {
                
                img.setAttribute('src', 'mulherjovem.png')
            } else if (idade < 50) {
                
                img.setAttribute('src', 'mulheradulta.png')
            } else {
                
                img.setAttribute('src', 'mulheridosa.png')
            }
         }
         res.style.textAlign = 'center'
         res.innerHTML = `<p>Detectamos ${genero} com ${idade} anos.</p>`
         res.appendChild(img)
    }
}