function Category(id, title) {
    this.id = id;
    this.title = title;
}
function Product(name, price, category) {
    this.name = name;
    this.price = price;
    this.category = category;
}
const shoesCategory = new Category("1", "Shoes");
const pantsCategory = new Category("2", "Pants");
const nike = new Product("Air nike", 20, shoesCategory);
const adidas = new Product("Ad80", 25, shoesCategory);
const pants = new Product("Puma", 30, pantsCategory);
function Cart() {
    this.products = [];
    this.addProduct = function(productToAdd) {
        this.products.push(productToAdd);
    }
    this.displayProductsName = function() {
        for(let i = 0; i< this.products.length; i++) {
            console.log(this.products[i].name);
        }
    }
    this.removeProduct = function(productToRemove) {
    //     const index = this.products.findIndex(function(prod) {
    //         return prod.name === productToRemove.name;
    //     })
    //     this.products.splice(index, 1);
    // }

// 2 budas
    
    //     for(i in this.products) {
    //         if(this.products[i].name === productToRemove.name) {
    //             this.products.splice(i, 1);
    //             break;
    //         }
    //     }
    // }    
    this.products = this.products.filter(function(prod) {
        return prod.name !== productToRemove.name;
        })
    }   
}
const newCart = new Cart();
newCart.addProduct(nike);
newCart.addProduct(adidas);
newCart.addProduct(pants);
newCart.removeProduct(nike);
newCart.displayProductsName();