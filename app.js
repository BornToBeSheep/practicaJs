

const productos = document.querySelector("#productos")

fetch(" /data.json")
.then ((res) => res.json())
.then ((data) =>{
    data.forEach(producto => {
        const contenedor = document.createElement("div")
        contenedor.innerHTML = `
        <img src="${producto.img}" style="max-width: 100px">
        <h5>${producto.nombre}</h5>
        <h3>${producto.id}</h3>
        <p>${producto.precio}</p>
        <button href="#" class="" onClick="agregarAlcarrito(${producto.id})">Agregar al carrito</button`
        productos.append(contenedor);
    })
})

const agregarAlcarrito = (indice)=> {
    console.log (indice)
}
