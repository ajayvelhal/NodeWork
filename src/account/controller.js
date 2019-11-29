const Account = require("../models/account")
const createNewAccount = account => {
    const newAccount = new Account(account)
    return newAccount.save()
}

const getAccounts = () => {
    return Account.find().populate("csutomer")
}

const getAccountsbyId = id => {
    return Account.findById(id).populate("customer")
}

const accUpdateBalbyId = (id, amount) => {
    console.log(id)
    return Account.findByIdAndUpdate(id, {
        $inc: {
            balance: amount
        }
    })
}
// const deleteAcc = id => {
//     return Account.deleteOne(id)
// }

module.exports = {
    createNewAccount: createNewAccount,
    getAccounts: getAccounts,
    getAccountsbyId: getAccountsbyId,
    accUpdateBalbyId: accUpdateBalbyId
}