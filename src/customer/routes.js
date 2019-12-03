import { Router } from 'express'
const route = Router()
import { createNewCustomer, getCustomerById, getCustomers, delCustomerById } from "./controller"

route.post('/', (request, response) => {
    createNewCustomer(request.body)
        .then(resp => {
            console.log(resp)
            return response.send(resp)

        }).catch(err => {
            console.log(err)
        })

})

route.get('/', (request, response) => {
    getCustomers()
        .then(cust => {
            console.log(cust)
            return response.send("Customers List")
        }).catch(err => {
            console.log(err)
        })
})

route.get('/:id', (request, response) => {
    getCustomerById(request.params.id)
        .then(customer => {
            console.log(customer)
            return response.send(customer)

        }).catch(err => {
            console.log(err)
            response.sendStatus(500)

        })
})

route.delete('/:id', (request, response) => {
    delCustomerById({ _id: request.params.id })
        .then(del => {
            console.log(del)
            return response.send(del)
        }).catch(err => {
            console.log(err)
        })
})

export default route