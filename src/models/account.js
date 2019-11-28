const mongoose = require('mongoose')

const accountSchema = mongoose.Schema({
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
        type: mongoose.Schema.ObjectId,
        required: true,
        reference: 'customer'
    }
})

const accountModel = mongoose.model('account', accountSchema)

module.exports = accountModel