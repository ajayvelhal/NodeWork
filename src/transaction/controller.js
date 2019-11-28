const Transaction = require("../models/transaction")

const createNewTransaction = transaction => {
    const newTransaction = new Transaction(transaction)
    return newTransaction.save()
}

const getTransaction = () => {
    return Transaction.find()
}

const getTransactionbyId = id => {
    return Transaction.findById(id)
}

module.exports = {
    createNewTransaction: createNewTransaction,
    getTransaction: getTransaction,
    getTransactionbyId: getTransactionbyId
}