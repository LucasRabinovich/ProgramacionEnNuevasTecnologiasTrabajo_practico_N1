const productos = [
    { id: 1, nombre: "Remera", precio: 10000, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 30000, categoria: "Ropa" },
    { id: 3, nombre: "Zapatillas", precio: 100000, categoria: "Calzado" },
    { id: 4, nombre: "Gorra", precio: 20000, categoria: "Accesorios" },
    { id: 5, nombre: "Campera", precio: 25000, categoria: "Ropa" }
];

console.log(productos[0].nombre);

for (const producto of productos) {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
}

productos.forEach(producto => {
    console.log(`Producto: ${producto.nombre} - Precio: $${producto.precio}`);
});
const nombresProductos = productos.map(producto => producto.nombre);
console.log(nombresProductos);

const ropa = productos.filter(producto => producto.categoria === "Ropa");
console.log(ropa);

const productosCaros = productos.filter(producto => producto.precio > 3000);
console.log(productosCaros);

const gorra = productos.find(producto => producto.nombre === "Gorra");
console.log(gorra);