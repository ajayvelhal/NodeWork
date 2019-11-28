const Account = require("../models/account")
const Transaction = require('../models/transaction')
const createNewAccount = account => {
    const newAccount = new Account(account)
    return newAccount.save()
}

const getAccounts = () => {
    return Account.find()
}

const getAccountsbyId = id => {
    return Account.findById(id)
}

const accUpdateBalbyId = id => {
    return Account.updateOne(id)
}
// const deleteAcc = id => {
//     return Account.deleteOne(id)
// }

module.exports = {
    createNewAccount: createNewAccount,
    getAccounts: getAccounts,
    getAccountsbyId: getAccountsbyId,
    accUpdateBalbyId: accUpdateBalbyId
    //deleteAcc: deleteAcc
}