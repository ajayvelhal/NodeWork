import Account from "../models/account"
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

export const createNewAccount = createNewAccount
export const getAccounts = getAccounts
export const getAccountsbyId = getAccountsbyId
export const accUpdateBalbyId = accUpdateBalbyId