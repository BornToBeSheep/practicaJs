
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
alert (`El promedio de lo comprado es: ${sacarPromedio(total, cont)}`);