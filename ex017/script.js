function verificar() {
    
    var inicio = window.document.getElementById('inicio')
    var fim = window.document.getElementById('fim')
    var intervalo = window.document.getElementById('intervalo')
    var res = window.document.getElementById('res')


    if (inicio.value.length == 0 || fim.value.length == 0 || intervalo.value.length == 0) {
        window.alert('[ERRO] Falta dados!') 
        res.innerHTML += `Impossível contar`       
    }else{
        res.innerHTML = `Contando: `
        var i = Number(inicio.value)
        var f = Number(fim.value)
        var inter= Number(intervalo.value)

        if (inter <= 0) {
            window.alert('Passo inválido! Considerando PASSO 1')
            inter = 1   
        }

        if (i < f) {
            for(var c = i; c <= f ; c += inter){
                res.innerHTML += ` ${c} \u{1F481}`
            }
        } else {
            for (var c = i; c >=f ; c -= inter ) {
                res.innerHTML += ` ${c} \u{1F481}` 
                
            }
        } 
        res.innerHTML += ` \u{1F3C1}`
    }
    
    
    }