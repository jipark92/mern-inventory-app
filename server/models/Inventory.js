const mongoose = require('mongoose')

const InvetorySchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    detail:{
        type: String,
        required: true
    }
})

const InventoryModel = mongoose.model('inventory', InvetorySchema)

module.exports = InventoryModel