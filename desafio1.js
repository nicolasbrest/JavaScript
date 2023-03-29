class ProductManager {

    constructor (){
        this.productos = [];
    }

    getProduct = () => {
        return this.productos;
    }

    agregarProductos = (
        title, description, price, thumbnail, code, stock
    ) => {
        const product = {
            title: "producto prueba",
            description: "producto de prueba",
            price: "10",
            thumbnail: "sin imagen",
            code: "sku123abc",
            stock: 30 
        };

        if (this.productos.length === 0) {
            product.id = 1;
        }else{
            product.id = this.productos[this.productos.length - 1].id + 1;
        }
        
        this.productos.push(product);
    }

    getProductById = (idProduct, idStock) => {
        const productoIndex = this.productos
                .findIndex (productos => product.id === idProduct);
        
                if (productoIndex === -1) {
                    console.log('Not Found');
                    return;
                }
                
        const stockRegistrado = 
                this.productos[productoIndex].stock.includes(idStock);
        
                if (stockRegistrado){
                    console.log('ID =', stockRegistrado);
                    return;
                }
        
        this.productos[productoIndex].stock.push(idStock);
    }
}