
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

class ShopCart {
    constructor(product, productID, quantity, price, totalPrice){
        this.product = product
        this.productID = productID
        this.quantity = quantity
        this.price = price
        this.totalPrice = totalPrice
    }
}

class Order {
    constructor(product, productID, ) {
        
    }
}

class Customer {
    constructor(name) {
        this.name = name
        
    }
}