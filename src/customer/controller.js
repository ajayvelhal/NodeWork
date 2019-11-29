import Customer, { findById, find, remove } from "../models/customer"

const createNewCustomer = customer => {
    const newCustomer = new Customer(customer)
    return newCustomer.save()
}

const getCustomerById = id => {
    return findById(id)
}

const getCustomers = () => {
    return find()
}

const delCustomerById = id => {
    console.log(id)
    return remove(id)
}

export const createNewCustomer = createNewCustomer
export const getCustomerById = getCustomerById
export const getCustomers = getCustomers
export const delCustomerById = delCustomerById