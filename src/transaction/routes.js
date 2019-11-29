import { Router } from "express"
const route = Router()
import Transaction from '../models/transaction'
import Account from "../models/account"

import { createNewTransaction, getTransaction, getTransactionbyId } from "./controller"

route.post('/', (request, response) => {
    createNewTransaction(request.body)
        .then(resp => {
            return response.send(resp)
        }).catch(err => {
            console.log(err)
        })
})

route.get('/', (request, response) => {
    getTransaction()
        .then(resp => {
            console.log(resp)
            return response.send("Accounts List")
        }).catch(err => {
            console.log(err)
        })
})

route.get('/:id', (request, response) => {
    getTransactionbyId(request.params.id)
        .then(resp => {
            console.log(resp)
            return response.send("Account Details")
        }).catch(err => {
            console.log(err)
        })
})

export default route