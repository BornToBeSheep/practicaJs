/*
function seguirComprando () {
    let confirmacion = prompt("Desea seguir comprando? Ingrese S/N");
    if (confirmacion == "S"){
        confirmacion = true;
        return confirmacion;
    }else if (confirmacion == "N"){
        return false;
    }
}

function sacarPromedio (total, cont){
    return total / cont;
}

let valor = 0;
let cont = 0;
let total = 0;
do{
    let agregar = parseInt(prompt("Ingrese el numero del producto que desea agregar al carrito"));
    let valor = Math.ceil(Math.random()*30);   
    total = total + valor;
    cont++;
}while (seguirComprando());
alert (`El costo total de lo comprado es: ${total}`);
alert (`El promedio de lo comprado es: ${sacarPromedio(total, cont)}`);*/


/*const dniMin = 10000000;
const dniMax = 99999999;
const marca = {}
function generarDatos (){
    let dni = Math.floor(Math.random()*(dniMax-dniMin+1) + dniMin);
    let cant = Math.floor(Math.random()*10) +1;
    let cod;
    let nuevaVenta = {dni:Math.floor(Math.random()*(dniMax-dniMin+1) + dniMin , cant: Math.floor(Math.random()*10) +1, cod}
}
*/



/*

*----------------------
}

*/
/*
function recorrerLista (listaCompradores){
    let mismoDni = listaCompradores.ventas.dni[0];
    let maximo = 0;
    for (let i=0; i<= listaCompradores.length; i++){
        let total = 0;
        let aux = 1;
        while (mismoDni == listaCompradores.ventas.dni[i]){
            total = total + listaCompradores.producto.precio[aux];
            if (aux <= listaCompradores.ventas.cant){
                aux++;
            }
        }
        if (total > maximo){
            maximo = total;
        }
    }
    return maximo
}
*/

const dniMin = 10000000;
const dniMax = 99999999;
var i = 0;
const marcas = ["dahua", "hikvision", "garnet", "dsc", "cadx"];

class venta {
    constructor (i){
        this.dni = Math.floor(Math.random()*(dniMax-dniMin+1) + dniMin);
        this.codigo = i;
        this.cant = Math.floor(Math.random()*5) +1;
    }
}

class dispositivo {
    constructor (i){
        this.cod = i,
        this.categoria = Math.floor(Math.random()*4) +1;
        this.cantGb = Math.floor(Math.random()*999) +1;
        this.precio = Math.random()*1;
        this.marca = marcas[Math.floor(Math.random()*4)];
    }
}


/*
function recorrerLista (listaCompradores){
    let mismoDni = listaCompradores.find(producto.dni);
    let maximo = 0;
    for (let i=0; i<= listaCompradores.length; i++){
        let total = 0;
        let aux = 1;
        while (mismoDni == listaCompradores.ventas.dni[i]){
            total = total + listaCompradores.producto.precio[aux];
            if (aux <= listaCompradores.ventas.cant){
                aux++;
            }
        }
        if (total > maximo){
            maximo = total;
        }
    }
    return maximo
}
*/

//Genero aleatoriamente una lista con informacion sobre 100 ventas hechas en el local
do{
    i = i + 1;
    var ventas = new venta(i);                      //Creo el perfil de un comprador
    var producto = new dispositivo(i);              //Creo un producto aleatorio
    var listaCompradores = [ventas, ];      //Creo una array donde junto el perfil con los prod comprados
    if (ventas.cant > 1 && ventas.cant + ventas.codigo <= 100) {
        let aux = i;
        for (i; i<=ventas.cant + aux; i++) { 
            producto = new dispositivo(i);
            listaCompradores.push (producto);
        }
    }
    console.log(listaCompradores);
}while (ventas.codigo <= 100);

//Recorro la lista creada en el modulo anterior para obtener datos de las ventas
/*console.log(listaCompradores);
console.log(recorrerLista(listaCompradores));
*/