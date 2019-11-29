import { Router } from "express"
const route = Router()

import { createNewAccount, getAccounts, getAccountsbyId } from "./controller"

// const {
//     createNewTransaction, getTransaction
// } = require("../transaction/controller")

route.post('/', (request, response) => {
    createNewAccount(request.body)
        .then(resp => {
            console.log(resp)
            return response.send(resp)
        }).catch(err => {
            console.log(err)
        })
})

route.get('/', (request, response) => {
    getAccounts()
        .then(resp => {
            console.log(resp)
            return response.send("Accounts List")
        }).catch(err => {
            console.log(err)
        })
})

route.get('/:id', (request, response) => {
    getAccountsbyId(request.params.id)
        .then(resp => {
            console.log(resp)
            return response.send("Account Details")
        }).catch(err => {
            console.log(err)
        })
})
// route.put('/:id', (request, response) => {
//     createNewTransaction().then(resp => {
//         getAccountsbyId({ _id })
//         if (getTransaction.amount('debit')){

//         }
//     }).catch(err => {
//             console.log(err)
//         })

// })

// route.delete('/:id', (request, reponse) => {
//     deleteAcc(request.params.id)
//         .then(resp => {
//             console.log(resp)
//             return reponse.send("Account deleted")
//         }).catch(err => {
//             console.log(err)
//         })
// })

export default route