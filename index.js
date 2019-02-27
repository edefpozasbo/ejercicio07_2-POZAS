//Se crea una función que recibe una lista para sumar sus elemento
var sumar_elementos_lista=function(lista){
    //retorna una promesa
    return new Promise(function(resolve,reject){
        //se suman los elementos de la lista
        let suma=0;
        for(var i=0;i<lista.length;i++){
            suma+=lista[i];
        }
        //la funcion resolve es la que contendra la respuesta
        resolve(suma);
    });
}
//se crea la función que valida si es par
var es_par=function(valor){
    //retorna una promesa
    return new Promise(function(resolve,reject){
        //se valida si es par
        let res=valor%2==0;
        //se construye la respuesta
        let cad="La suma : "+valor+" - "+(res?"Es par":"No es par");
        //se regresa la respuesta con el resolve
        resolve(cad);
    });
}
//encadenamos de manera más entendible las promesas
//primero se suman los elementos y ese resultado se evalua si es par
//y al final se obtiene su resultado desde res
//todo queda mas compacto en vez de usar funciones anidadas
sumar_elementos_lista([1,2,4,5,8]).then(es_par).then(function(res){
    console.log(res);
});
