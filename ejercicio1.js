
function palindromo(palabra){
    var aux="";
    for (i in palabra){
        aux = palabra[i] + aux;
    }
    if (palabra == aux){
        return true
    }else{
        return false
    }
}

