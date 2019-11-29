import { Schema, model } from 'mongoose'

const accountSchema = Schema({
    type: {
        type: String,
        required: true,
        enum: ["saving", "current"]
    },
    balance: {
        type: Number,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    },
    customer: {
        type: Schema.ObjectId,
        required: true,
        reference: 'customer'
    }
})

const accountModel = model('account', accountSchema)

export default accountModel