const Transaction = require("../models/transaction")
const { accUpdateBalbyId } = require("../account/controller")
const createNewTransaction = async transaction => {
    const newTransaction = new Transaction(transaction)
    let createdTransaction = await newTransaction.save()
    if (transaction.type == "debit") {
        await accUpdateBalbyId(transaction.accountID, transaction.amount * -1)
    }
    else {
        await accUpdateBalbyId(transaction.accountID, transaction.amount)

    }
    return createdTransaction.populate("account").execPopulate()
}

const getTransaction = () => {
    return Transaction.find().populate("account", {
        accountNumber: 1
    })
}

const getTransactionbyId = id => {
    return Transaction.findById(id).populate("account", {
        accountID: 1
    })
}

module.exports = {
    createNewTransaction: createNewTransaction,
    getTransaction: getTransaction,
    getTransactionbyId: getTransactionbyId
}