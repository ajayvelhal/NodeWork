import Account from "../models/account"
export const createNewAccount = account => {
    const newAccount = new Account(account)
    return newAccount.save()
}

export const getAccounts = () => {
    return Account.find().populate("csutomer")
}

export const getAccountsbyId = id => {
    return Account.findById(id).populate("customer")
}

export const accUpdateBalbyId = (id, amount) => {
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

