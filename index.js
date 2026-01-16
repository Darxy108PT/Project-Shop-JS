
class Shop{
    constructor(name, address, id) {
        this.name = name
        this.address = address
        this.id = id
    }
}

class Products {

    constructor(id, name, price, version, category) {
        this.id = id
        this.name = name
        this.price = price
        this.version = version
        this.category = category
    }
}

class Inventory {

    constructor(quantity) {
        this.products = []
    }

    ShowProduct(productID){
        let prdct = this.products.find((Prdct)=>Prdct.id === productID)
        console.log(prdct.name)
        console.log(prdct.id)
        console.log(prdct.price + "€")
        console.log("Version: "+prdct.version)
        console.log("Category: "+prdct.category)
        return prdct
    }

    addProduct(product){
        this.products.push(product)
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

Pc = new Products('1','PC',300,'2.1','PCs')
const duck = new Products('2','Duck',3001,'2.1','Ducks')
const inventory = new Inventory()
inventory.addProduct(duck)



setTimeout(() => inventory.ShowProduct(duck.id), 1000)






