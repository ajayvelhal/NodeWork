
const express = require('express')
const parser = require('body-parser')
const app = express()
const mongoose = require('mongoose')
const Customer = require('./models/customer')
const Account = require('./models/account')
const Transaction = require('./models/transaction')

const customerRouter = require('./customer/routes')
const accRouter = require('./account/routes')
const transRouter = require('./transaction/routes')
app.use(parser.json({}))
app.use(
    parser.urlencoded({
        extended: false
    })
)

app.use("/customer", customerRouter)
app.use('/account', accRouter)
app.use('/transaction', transRouter)

mongoose.connect(
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




