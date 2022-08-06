function tabuada() {
    var num = document.getElementById("numero");
    var res = document.getElementById("input");
    var tab = document.getElementById("input");

    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        var numero = Number(num.value);
        tab.innerHTML = ''
        
    }
    for(var c = 0; c <= 10; c++){
        var multiplicar = Number(c) * numero
        res.innerHTML += numero + " X " + c + " = " + multiplicar + "\n"
        
    }
}

