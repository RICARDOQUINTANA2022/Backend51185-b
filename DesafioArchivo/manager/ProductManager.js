import fs from 'fs';

const path = './productos/productos.JSON'

export default class ProductManager {
    consultaProducto =  async() => {
        if(fs.existsSync(path)){
            const data = await fs.promises.readFile(path, 'utf-8')
            const products = JSON.parse (data)
            return products
        } else {
            return []
        }
    }
    agrearProducto = async(producto) => {    
        const products = await this.consultaProducto();

        if(products.length === 0){
            producto.id = 1
        }else{
            producto.id = products [products.length-1].id+1;
        }
        products.push(producto);

        await fs.promises.writeFile(path, JSON.stringify(products,null, '\t'))
        return producto
    }
    
   deleteProducts = async (producto) => {
        const products = await this.consultaProducto();

        if(products.length === 0){
            console.log("no hay productos");
        }else{
            producto = products.splice(0,1)
        }
        
        
        await fs.promises.writeFile(path, JSON.stringify(products,null, '\t'));
        return producto;
        }
    };
    
