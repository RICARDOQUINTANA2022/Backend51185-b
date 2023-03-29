import ProductManager from "./DesafioArchivo/manager/ProductManager.js";

const manager = new ProductManager();
const total = async () =>{
    let products = {
        id : "id",
        title : "producto prueba",
        description : "este es un producto prueba",
        price : "200",
        thumbnail : "sin imagen",
        code : "abc123",
        stock : "25"
    }
    let result = await manager.agrearProducto(products);
    console.log(result)

    let producto = await manager.consultaProducto();
    console.log(producto)

}

total()