import Customer, { findById, find, remove } from "../models/customer"

export const createNewCustomer = customer => {
    const newCustomer = new Customer(customer)
    return newCustomer.save()
}

export const getCustomerById = id => {
    return Customer.findById(id)
}

export const getCustomers = () => {
    return Customer.find()
}

export const delCustomerById = id => {
    console.log(id)
    return Customer.remove(id)
}

