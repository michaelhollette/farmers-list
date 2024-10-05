class Customer{
    constructor(name, email, shippingAddress){
        this.orderHistory = []
        this.name = name;
        this.email = email;
        this.shippingAddress = shippingAddress;
    }
    addToOrderHistory(cart){
        this.orderHistory.push(cart)
    }
}

module.exports = Customer;