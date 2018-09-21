function conversor(numero){
    binario="";
    while(numero>1){
        binario =  numero % 2 + binario;
        numero = Math.trunc(numero/2);
    }
    binario = numero + binario;
    return binario;
}