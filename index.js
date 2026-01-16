
class Shop{
    constructor(name, address, id) {
        this.name = name
        this.address = address
        this.id = id
    }
}

class Products {
    constructor(id, name, price, brand, version, category) {
        this.id = id
        this.name = name
        this.price = price
        this.brand = brand
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



//====================================================================================================================================|
// Products                                                                                                                           |
//====================================================================================================================================|

//------------------------------------------------------------------------------------------------------------------------------------|
// Smartphones                                                                                                                        |
//------------------------------------------------------------------------------------------------------------------------------------|

// Samsung
const samsungS24 = new Products (1,'Smartphone Samsung Galaxy S24 (6.2\'\' - 8GB - 256GB)', 699.99, 'Samsung', 'S24', 'Smartphone')
const samsungS25 = new Products (2,'Smartphone Samsung Galaxy S25 (6.2\'\' - 12GB - 256GB)', 999.99, 'Samsung', 'S25', 'Smartphone')
const samsungA25 = new Products (3,'Smartphone Samsung Galaxy A25 (6.5\'\' - 8GB - 256GB)', 249.99, 'Samsung', 'A25', 'Smartphone')
const samsungA35 = new Products (4,'Smartphone Samsung Galaxy A35 (6.6\'\' - 6GB - 128GB)', 329.99, 'Samsung', 'A35', 'Smartphone')
const samsungZFlip6 = new Products (5,'Smartphone Samsung Galaxy Z Flip 6 (6.7\'\' - 12GB - 256GB)', 1199.00, 'Samsung', 'Z Flip 6', 'Smartphone')
const samsungZFold6 = new Products (6,'Smartphone Samsung Galaxy Z Fold 6 (7.6\'\' - 12GB - 256GB)', 1999.00, 'Samsung', 'Z Fold 6', 'Smartphone')

// Iphone
const iphone14 = new Products (7,'iPhone 14 (6.1\'\' - 128GB)', 699.00, 'APPLE', '14', 'Smartphone')
const iphone14ProMax = new Products (8,'iPhone 14 Pro Max (6.7\'\' - 128GB)', 1099.00, 'APPLE', '14 Pro Max', 'Smartphone')
const iphone15 = new Products (9,'iPhone 15 (6.1\'\' - 128GB)', 799.00, 'APPLE', '15', 'Smartphone')
const iphone15ProMax = new Products (10,'iPhone 15 Pro Max (6.7\'\' - 256GB)', 1299.00, 'APPLE', '15 Pro Max', 'Smartphone')
const iphone16 = new Products (11,'iPhone 16 (6.1\'\' - 128GB)', 929.00, 'APPLE', '16', 'Smartphone')
const iphone16ProMax = new Products (12,'iPhone 16 Pro Max (6.7\'\' - 128GB)', 1499.00, 'APPLE', '16 Pro Max', 'Smartphone')

// Xiaomi
const xiaomi13 = new Products(13,'Smartphone XIAOMI 13 (6.36\'\' - 8GB - 256GB)',649.99,'XIAOMI','13','Smartphone')
const xiaomi14 = new Products(14,'Smartphone XIAOMI 14 (6.36\'\' - 12GB - 256GB)',899.99,'XIAOMI','14','Smartphone')
const xiaomiRedmi12 = new Products (15,'Smartphone XIAOMI Redmi 12 (6.67\'\' - 8GB - 256GB)',169.99, 'XIAOMI', 'Redmi 12', 'Smartphone')
const xiaomiRedmi13 = new Products (16,'Smartphone XIAOMI Redmi 13 (6.79\'\' - 8GB - 256GB)',199.99, 'XIAOMI', 'Redmi 13', 'Smartphone')
const xiaomiRedmiNote13 = new Products (17,'Smartphone XIAOMI Redmi Note 13 (6.67\'\' - 12GB - 512GB)',299.99, 'XIAOMI', 'Redmi Note 13', 'Smartphone')
const xiaomiRedmiNote14 = new Products (18,'Smartphone XIAOMI Redmi Note 14 (6.67\'\' - 8GB - 256GB)',249.99, 'XIAOMI', 'Redmi Note 14', 'Smartphone')
