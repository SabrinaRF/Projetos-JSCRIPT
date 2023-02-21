function tabuada() {
    
    var numero = document.getElementById('numero')
    var num = Number(numero.value)

    var tab = document.getElementById('seltab')

    if (numero.value.length == 0 ) {
        window.alert('Por favor, digite um número!')
    } else {

        tab.innerHTML = ''
        for (var c = 0; c <= 10; c++) {
        
        var item = document.createElement('option')
        item.text = `${num} x ${c} = ${num*c}`
        item.value = `tab${c}`
        tab.appendChild(item)
        
    }


    }

    
}