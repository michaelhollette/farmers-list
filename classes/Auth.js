const Customer = require('./Customer.js')


class Auth {
    constructor(){
        this.customers = []
    }
    register(name, email, shippingAddress){
        let newCustomer = new Customer(name, email, shippingAddress)

        this.customers.push(newCustomer)
    }
    login(email){
        for (let customer of this.customers){
            if (customer.email == email){
                return customer;
            }
        }
        return null;
    }
}

module.exports = Auth;
