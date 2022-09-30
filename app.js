class cliente {
    constructor(nombre, telefono, direccion){
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}

let button = document.getElementById ("enviarInfo");
button.addEventListener("click", cargarCliente);


function cargarCliente () {
    let nombre = document.getElementById("nombre").value;
    let telefono = document.getElementById("telefono").value;
    let direccion = document.getElementById("direccion").value;
    let nuevoCliente = new cliente (nombre, telefono, direccion);
    let enJSON = JSON.stringify(nuevoCliente);
    localStorage.setItem("cliente", enJSON);
    mostrarCliente (enJSON);

}

function mostrarCliente (c){
    let cliente = JSON.parse(c);
    let formulario = document.getElementById("formulario");
    formulario.innerHTML = "";
    let nuevoContenido = document.createElement ("div");
    nuevoContenido.innerHTML = `<h1> Bienvenido ${cliente.nombre}. Haga click en el boton para continuar su compra </h1> <button id="continuar"> Continue comprando </button>`;
    formulario.appendChild(nuevoContenido);
    let continuar = document.getElementById ("continuar");
    continuar.addEventListener("click", conti);
    function conti(){
        formulario.innerHTML= "";
        }
    }


let productos = [
    {
        id: 1,
        nombre: "Taza magica",
        precio: 200,
        img: "recursos/tazas.jpg",
        desc: "Tazas magicas. Estas tazas solo mostraran su diseño si se aumenta su temperatura"
    },
    {
        id: 2,
        nombre: "Remera estampada",
        precio: 500,
        img: "recursos/remera.jpg",
        desc: "Remera estampada. Personalizala con el diseño que mas te guste"
    },
    {
        id: 3,
        nombre: "Mate",
        precio: 400,
        img: "recursos/mate.jpg",
        desc: "Personaliza tu mate con el diseño que quieras"
    },
    {
        id: 4,
        nombre: "Taza magica",
        precio: 200,
        img: "recursos/tazas.jpg",
        desc: "Tazas magicas. Estas tazas solo mostraran su diseño si se aumenta su temperatura"
    },
];



let carrito =[];


const cardsProductos = () =>{
    let contenedor= document.getElementById ("contenedor");
    productos.forEach((producto, indice)=>{
        let card = document.createElement ("div");
        card.classList.add("card");
        card.innerHTML = `<img class="card__img" src="${producto.img}" alt="...">
        <div class="card__body">
        <h5 class="card__title">${producto.nombre}</h5>
        <p class="card__text">Precio: $${producto.precio}</p>
        <button href="#" class="btn btn-primary" onClick="agregarAlcarrito(${indice})">Agregar al carrito</button> 
        </div>`
        contenedor.appendChild(card);
    });
};

cardsProductos();


let carritoModal = document.getElementById ("carrito");

const agregarAlcarrito = (indice) =>{
    alert("Se agrego el producto al carrito");
    /* Recorro el array carrito comparando el id de sus elementos con el id del producto seleccionado, de esta forma, puedo saber si el prod seleccionado esta o no esta en el carrito. En caso de no estarlo, findIndex retorna -1 */
    const indiceCarrito = carrito.findIndex((elemento) =>{
        return elemento.id === productos[indice].id;
    });
    /* si indiceCarrito es estrictamente igual a -1 quiere decir que el producto seleccionado no estaba dentro del carritob  */
    if (indiceCarrito === -1){
        productoAgregar = productos[indice];
        productoAgregar.cant = 1;
        carrito.push(productoAgregar);
        crearCarrito(indice);
    }else {
        carrito[indiceCarrito].cant += 1;
        crearCarrito(indice);
    }
}




const crearCarrito = (indice)=>{
    let total = 0;
    carritoModal.innerHTML = "";
    carrito.forEach((producto)=>{
        total += producto.precio * producto.cant;
        let subtotal = producto.precio * producto.cant;
        const item = document.createElement("div");
        item.innerHTML = `<img src="${producto.imagen}" class="carrito-img-left" alt="...">
        <div class="carrito-body">
        <h5 class="carrito-title">${producto.nombre}</h5>
        <p class="carrito-text">Precio: $${producto.precio}</p>
        <p class ="carrito-cantidad">Cantidad: ${producto.cant}</p>
        <p>Subtotal: $${subtotal}</p>
        <button class="btn btn-primary" onClick="eliminarDelCarrito(${indice})">Elimnar producto</button>
        </div>`;
        carritoModal.appendChild(item);
    })
    const mostrarTotal = document.createElement("div");
    mostrarTotal.classList.add("total")
    mostrarTotal.innerHTML = `<p> Total: $${total}</p>`
    carritoModal.appendChild(mostrarTotal);
}


const eliminarDelCarrito = (index) =>{
    let item = carrito.find((producto) => producto.id === index);
    let indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    console.log(indice);
    swal({
        title: "Eliminaste el producto seleccionado",
        text: "los cambios han sido realizados",
        icon: "success",
    });
}