import Transaction from "../models/transaction"
import { accUpdateBalbyId } from "../account/controller"
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

export const createNewTransaction = createNewTransaction
export const getTransaction = getTransaction
export const getTransactionbyId = getTransactionbyId