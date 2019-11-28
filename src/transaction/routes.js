const { Router } = require("express")
const route = Router()
const Transaction = require('../models/transaction')
const Account = require("../models/account")

const {
    createNewTransaction,
    getTransaction,
    getTransactionbyId
} = require("./controller")

route.post('/', (request, response) => {
    createNewTransaction(request.body)
        .then(resp => {
            let accountId = request.body.accountID
            let typetrans = request.body.type
            Account.findOne({ _id: accountId })
                .then(acc => {
                    if (typetrans == 'credit') {
                        acc.balance = acc.balance + resp.amount
                        console.log(acc.balance)
                        acc.save().then(account => {
                            resp.send(account)
                        })
                    }
                    else {
                        acc.balance = acc.balance - resp.amount
                        console.log(acc.balance)
                        acc.save().then(account => {
                            resp.send(account)
                        })
                    }

                })
            console.log(accountId, typetrans, Account.balance)

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

module.exports = route