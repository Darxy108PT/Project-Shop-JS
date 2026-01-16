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

        for (let product of this.products.keys()) {
            if (product.id === productID) {
                let prdct = product
                console.log("\n|--------------------------------------------------------------------------------|")
                console.log("| ", prdct.name)
                console.log("| ",prdct.id)
                console.log("| ",prdct.price + "€")
                console.log("| Brand: " + prdct.brand)
                console.log("| Version: " + prdct.version)
                console.log("| Category: " + prdct.category)
                console.log("| Quantity: " + this.products.get(product))
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
}

class ShoppingCart {
    constructor(product, productID, quantity, price){
        this.product = product
        this.productID = productID
        this.quantity = quantity
        this.price = price
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
    constructor(name, id) {
        this.name = name
        this.id = id    
    }
}

let prdct
let qntt

const inventory = new Inventory()

productsList.forEach(product => {
    prdct = product[0]
    qntt = product[1] 
    inventory.addProduct(prdct, qntt)
    setTimeout(() => inventory.ShowProduct(prdct.id), 1000)
});
