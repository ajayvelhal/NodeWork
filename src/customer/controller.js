const Customer = require("../models/customer")

const createNewCustomer = customer => {
    const newCustomer = new Customer(customer)
    return newCustomer.save()
}

const getCustomerById = id => {
    return Customer.findById(id)
}

const getCustomers = () => {
    return Customer.find()
}

const delCustomerById = id => {
    console.log(id)
    return Customer.remove(id)
}

module.exports = {
    createNewCustomer: createNewCustomer,
    getCustomerById: getCustomerById,
    getCustomers: getCustomers,
    delCustomerById: delCustomerById
}