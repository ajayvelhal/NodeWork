import express from 'express'
import { json, urlencoded } from 'body-parser'
const app = express()
import { connect } from 'mongoose'


import customerRouter from './customer/routes'
import accRouter from './account/routes'
import transRouter from './transaction/routes'
app.use(json({}))
app.use(
    urlencoded({
        extended: false
    })
)

app.use("/customer", customerRouter)
app.use('/account', accRouter)
app.use('/transaction', transRouter)

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




