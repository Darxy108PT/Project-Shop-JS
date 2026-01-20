import { productsList } from "./data.js"

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

    UpdateProduct(product, name, price, brand, version, category, quantity){
        product.name = name
        product.price = price
        product.brand = brand
        product.version = version
        product.category = category
        this.products.set(product, quantity)

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
    
    constructor(product, id, quantity, price) {
        this.products = new Map()
        this.products.set(product, quantity)
        this.id = id
        this.quantity = quantity
        this.price = price
    }


    showCart(productID){
        this.products.forEach((quantity, product) => {
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

    calculateTotal(cart) {
        fullPrice = 0
        for (let item of cart) {
            for (let product of item.products.keys()) {
                fullPrice +=  item.price * item.quantity
                this.totalPrice = fullPrice
            }
        }
    }

    createInvoice(cart, name, id) {
        this.customerID = id
        console.log("\n|-------------------------------------------------------------------------------|")
        console.log("|\t\t\t\t " + name + "'s Invoice \t\t\t\t|")
        console.log("|-------------------------------------------------------------------------------|")
        for (let item of cart) {
            for (let product of item.products.keys()) {
                fullPrice = item.price * item.quantity
                console.log(" ", product.name)
                console.log("  ID: " + item.id)
                console.log("  Quantity: " + item.quantity)
                console.log("  Price (Each One): ", product.price + " €   | Price (All): ", fullPrice + " €\n")   
            }
        }
        console.log("  Total: ", this.totalPrice + " €\n")
        console.log("\n  NIF: " + this.customerID)
        console.log("|-------------------------------------------------------------------------------|")
        this.totalPrice = 0
    }
}

class Customer {
    constructor(name, id, cart) {
        this.name = name
        this.id = id
        this.cart = [];
    }
          
    addToCart(product, quantity){
        if (quantity > inventory.products.get(product)) {
            quantity = inventory.products.get(product)
            console.log("Only " + quantity + " units of " + product.name + " are available. Added to cart.")
        }
        this.cart.push(new ShoppingCart(product, product.id, quantity, product.price))
        return product
    }

    removeFromCart(productID){
        for (let item of this.cart) {
            for (let product of item.products.keys()) {
                if (product.id === productID) {
                    item.products.delete(product)
                    return
                }
            }
        }
    }

    buyProducts(){
        let emptyCart = []
        let order = new Order(this.cart)
        order.calculateTotal(this.cart)
        order.createInvoice(this.cart, this.name, this.id)
        this.cart = emptyCart;
    }
}

let prdct
let qntt
let clear = false
let fullPrice = 0

const inventory = new Inventory()

productsList.forEach(product => {
    prdct = product[0]
    qntt = product[1] 
    inventory.addProduct(prdct, qntt)
});

const Frederico = new Customer("Frederico", 795304197, null)
Frederico.addToCart(inventory.getProduct(2), 1)
Frederico.addToCart(inventory.getProduct(12), 2)
Frederico.buyProducts()

const Alberto = new Customer("Alberto", 492164829, null)
Alberto.addToCart(inventory.getProduct(8), 1)
Alberto.buyProducts()

import fs from 'fs';
const content = 'Some content!';

fs.writeFileSync('C:\\Users\\dinis\\Desktop\\Estágio_Erasmus\\Project-Shop-JS\\Project-Shop-JS\\data.json', JSON.stringify(productsList), err => {
  if (err) {
    console.error(err);
  } else {
    // file written successfully
  }
});
