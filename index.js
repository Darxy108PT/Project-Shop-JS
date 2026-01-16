
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
    constructor(products, quantity) {
        this.products = products
        this.quantity = quantity
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
        this. quantity = quantity
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







