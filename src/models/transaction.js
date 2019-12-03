import { Schema, model } from 'mongoose'

import { composeWithMongoose } from "graphql-compose-mongoose"
const transSchema = Schema({
    type: {
        type: String,
        required: true,
        enum: ["debit", "credit"]
    },
    amount: {
        type: Number,
        required: true
    },

    accountID: {

        type: Schema.ObjectId,
        required: true,
        refernce: 'account'
    }


}, { timestamp: true }
)

const tranModel = model('transaction', transSchema)
export default tranModel
export const TransactionTC = composeWithMongoose(tranModel)
