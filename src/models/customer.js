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
export const customerModel = model("customer", customerSchema);

