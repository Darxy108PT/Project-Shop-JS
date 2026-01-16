import { productsList } from "./data.js"
import { Products } from "./data.js"

class Shop{
    constructor(name, address, id) {
        this.name = name
        this.address = address
        this.id = id
    }
}

class Inventory {

    constructor(quantity) {
        this.products = new Map()
    }

    ShowProduct(productID){

        if (!clear) {
            console.clear("")
            clear = true
        }
        for (let product of this.products.keys()) {
            if (product.id === productID) {
                let prdct = product
                console.log("\n|--------------------------------------------------------------------------------|")
                console.log("| \t\t\t\t\t", prdct.id, "\t\t\t\t\t |")
                console.log("|--------------------------------------------------------------------------------|")
                console.log(" ", prdct.name)
                console.log(" ", prdct.price + " €")
                console.log("  Brand: " + prdct.brand)
                console.log("  Version: " + prdct.version)
                console.log("  Category: " + prdct.category)
                console.log("  Quantity: " + this.products.get(product))
                console.log("|--------------------------------------------------------------------------------|\n")
                return prdct
            }
        }
        return null
    }

    addProduct(product, quantity) {
        if (this.products.has(product)) {
            this.products.set(product, this.products.get(product) + quantity)
        } else {
            this.products.set(product, quantity)
        }
    }

    removeProduct(product){
        console.log("You deleted the product: " + product.name)
        this.products.delete(product)
    }

    showListOfProducts(){
        this.products.forEach((quantity, product) => {
            console.log("Product Name: " + product.name + " | ID: " + product.id + " | Quantity: " + quantity)
        });
    }

    ChangeProducts(product, type, newValue){
        switch (type) {
            case "Name":
                product.name = newValue
                break;
            case "Price":
                product.price = parseFloat(newValue)
                break;
            case "Brand":
                product.brand = newValue
                break;
            case "Version":
                product.version = newValue
                break;
            case "Category":
                product.category = newValue
                break;
            case "Quantity":
                this.products.set(product, parseInt(newValue))
                break;
            default:
                console.log("Invalid type specified.")
                return;
        }
    }

    getProduct(id){
        for (let product of this.products.keys()) {
            if (product.id === id) {
                return product
            }
        }
    }
}

class ShoppingCart {
    
    constructor(quantity) {
        this.products = new Map()
    }


    showCart(productID){
        this.products.forEach((quantity, product) => {
            for (let product of this.products.keys()) {
                if (product.id === productID) {
                    let prdct = product
                    console.log("\n|--------------------------------------------------------------------------------|")
                    console.log("| \t\t\t\t\t", prdct.id, "\t\t\t\t\t |")
                    console.log("|--------------------------------------------------------------------------------|")
                    console.log(" ", prdct.name)
                    console.log(" ", prdct.price + " €")
                    console.log("  Brand: " + prdct.brand)
                    console.log("  Version: " + prdct.version)
                    console.log("  Category: " + prdct.category)
                    console.log("  Quantity: " + quantity)
                    console.log("|--------------------------------------------------------------------------------|\n")
                    return prdct
                }
            }
            return null
        });
    }
}

class Order {
    constructor(product, productID, customerID, quantity, price, totalPrice) {
        this.product = product
        this.productID = productID
        this.customerID = customerID
        this.quantity = quantity
        this.price = price
        this.totalPrice = totalPrice
    }
}

class Customer {
    constructor(name, id, cart) {
        this.name = name
        this.id = id
        this.cart = [];
    }
          
    addToCart(product, quantity){
        this.cart.push(new ShoppingCart(product, product.id, quantity, product.price))
        console.log("You added the product: " + product.name + " to the cart.")
    }
    removeFromCart(productID){
        for (let item of this.cart) {
            if (item.productID === productID) {
                console.log("You removed the product: " + item.product.name + " from the cart.")
                this.cart = this.cart.filter(item => item.productID !== productID)
                break
            }
        }
    }
}

let prdct
let qntt
let clear = false

const inventory = new Inventory()

productsList.forEach(product => {
    prdct = product[0]
    qntt = product[1] 
    inventory.addProduct(prdct, qntt)
});

const Frederico = new Customer("Frederico", 1, null)
Frederico.addToCart(inventory.getProduct(2), 1)
Frederico.addToCart(inventory.getProduct(4), 2)

