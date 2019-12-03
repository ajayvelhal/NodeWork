import express from 'express'
import { json, urlencoded } from 'body-parser'
const app = express()
import { connect } from 'mongoose'

import schema from "./schema"

// import {
//     createNewCustomer,
//     getCustomerById,
//     getCustomers
// } from "./customer/controller";
// import {
//     createNewAccount,
//     getAccountsbyId,
//     getAccounts
// } from "./account/controller";
// import {
//     createNewTransaction,
//     getTransaction,
//     getTransactionbyId
// } from "./transaction/controller"

import { ApolloServer } from "apollo-server-express";

// app.use(json({}))
// app.use(
//     urlencoded({
//         extended: false
//     })
// )

// let typeDefs = gql`
//     type Customer{
//         id:ID!
//         name:String!
//         mobile:String!
//     }

//     type Account{
//         id:ID!
//         type:String!
//         balance:Float!
//         accountNumber:String!
//         customer:Customer!
//     }

//     type Transaction{
//         id:ID!
//         type:String!
//         amount:Float!
//         account:Account!
//     }

//     input CustomerInput{
//         name:String!
//         mobile:String!
//     }
//     input AccountInput{
//         type: String!
//         balance:Float!
//         accountNumber:String!
//         customer:ID!
//     }

//     input TransactionInput{
//         type:String!
//         amount:Float!
//         account:ID!
//     }

//     type Query{
//         customer(id:ID!):Customer
//         customers:[Customer]
//         account(id:ID!):Account
//         accounts : [Account]
//         transaction(id:ID!):Transaction
//         transactions: [Transaction]
//     }

//     type Mutation{
//         createCustomer(input:CustomerInput):Customer 
//         createAccount(input:AccountInput):Account 
//         createTransaction(input:TransactionInput):Transaction
//     }
//     `;

// let resolvers = {
//     Query: {
//         customer(parent, args, context, info) {
//             return getCustomerById(args.id)

//         },
//         customers(parent, args, context, info) {
//             return getCustomers();
//         },
//         account(parent, args, context, info) {
//             return getAccountsbyId(args.id)
//         },
//         accounts(parent, args, context, info) {
//             return getAccounts();
//         },
//         transaction(parent, args, context, info) {
//             return getTransactionbyId(args.id)
//         },
//         transactions(parent, args, context, info) {
//             return getTransaction();
//         }


//     },
//     Mutation: {
//         createCustomer(parent, args, context, info) {
//             return createNewCustomer(args.input);
//         },
//         createAccount(parent, args, context, info) {
//             return createNewAccount(args.input)
//         },
//         createTransaction(parent, args, context, info) {
//             return createNewTransaction(args.input)
//         }
//     }
// }

const server = new ApolloServer({ schema });

server.applyMiddleware({ app })
connect(
    "mongodb+srv://root:root@cluster0-pdv2w.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
).then(res => {
    console.log("Database Connected")
    app.listen(8080, () => {
        console.log("Server Started")
    })
}).catch(err => {
    console.log("Server Error")
    console.log(err)
})




