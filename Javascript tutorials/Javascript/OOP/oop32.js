class Product {
    constructor (name, price, description) {
        this.name = name;
        this.price = price;
        this.description = description;
    }

    printName() {
        console.log(this.name);
    }
}

class Cosmetics extends Product{
    constructor(name, price, description, brand) {
        super(name, price, description);
        this.brand = brand;
    }
    printName() {
        console.log(this.desc); ///overridina virsutine funkcija nes yra subklases viduje
    }
}

class Clothing extends Product{
    constructor(name, price, description, size, color) {
        super(name, price, description);
        this.size = size;
        this.color = color;
    }
}

class Food extends Product{
    constructor(name, price, description, calories) {
        super(name, price, description);
        this.calories = calories;
    }
}

class Cart {
    constructor () {
        this.products = [];
        }
        addProduct = function(product) {
            this.products.push(product);
        }        
        removeProduct = function(product) {
            this.products = this.products.filter(prod => prod.name !== product.name);
        }
        displayItems = function() {
            this.products.forEach(prod => {
                console.log(prod.name)
            });
        }
        calculateSum = function() {
            return this.products.reduce(function(previousValue, currentValue) { 
                ///previousValue paduodam 0, o current yra nurodyta product price. tada antru kartu bus previous 32, current 20.
                    return previousValue + currentValue.price;
            }, 0)
        }
    }


const product1 = new Product ("shoes", 32, "adidas");
const product2 = new Product ("pants", 20, "puma");
const product3 = new Product ("hat", 10, "nike");

const cart = new Cart();
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);

cart.removeProduct(product2);

cart.displayItems();
let sum = cart.calculateSum();

const product4 = new Cosmetics ("cosm", 10, "cosm desc", "loreal");
const product5 = new Clothing ("shirt", 19, "shirt desc", 48, "black");

console.log(sum);

product5.printName();


