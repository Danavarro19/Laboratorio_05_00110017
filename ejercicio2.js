function sorter(lista){
    var aux;
    for (i in lista){
        for (j in lista){
            if (lista[i]<lista[j]){
                aux=lista[j];
                lista[j]=lista[i];
                lista[i]=aux;
            }
        }
    }
    return lista;
}