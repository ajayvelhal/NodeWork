import { schemaComposer } from "graphql-compose"

import { CustomerTC } from "./models/customer"

import { AccountTC } from "./models/account"

import { TransactionTC } from "./models/transaction"

import { getAccounts } from "./account/controller"

import { getTransaction } from "./transaction/controller"

import { getCustomers } from "./customer/controller"

AccountTC.addRelation("customer", {
    resolver: CustomerTC.getResolver("findById"),
    prepareArgs: {
        _id: source => source.customer
    }
})

TransactionTC.addRelation("account", {
    resolver: AccountTC.getResolver("findById"),
    prepareArgs: {
        _id: source => source.accountID
    }
})

schemaComposer.Query.addFields({
    customers: CustomerTC.getResolver("findMany"),
    account: AccountTC.getResolver("findMany"),
    transaction: TransactionTC.getResolver("findMany")
})

export default schemaComposer.buildSchema()