const mongoose = require('mongoose')

const transSchema = mongoose.Schema({
    type: {
        type: String,
        required: true,
        enum: ["debit", "credit"]
    },
    amount: {
        type: Number,
        required: true
    },
    timestamp: { timestamp: true },
    accountID: {
        type: mongoose.Schema.ObjectId,
        required: true,
        refernce: 'account'
    }
})

const tranModel = mongoose.model('transaction', transSchema)
module.exports = tranModel
