import { Schema, model } from "mongoose";

const customerSchema = Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    }
})
const customerModel = model("customer", customerSchema);

export default customerModel