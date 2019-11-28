const mongoose =  require("mongoose")

const customerSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobile: {
        type: String,
        required: true
    }
})
const customerModel = mongoose.model("customer", customerSchema);

module.exports=customerModel;