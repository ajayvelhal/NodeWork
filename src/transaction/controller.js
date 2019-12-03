import Transaction from "../models/transaction"
import { accUpdateBalbyId } from "../account/controller"
export const createNewTransaction = async transaction => {
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

export const getTransaction = () => {
    return Transaction.find().populate("account", {
        accountNumber: 1
    })
}

export const getTransactionbyId = id => {
    return Transaction.findById(id).populate("account", {
        accountID: 1
    })
}

