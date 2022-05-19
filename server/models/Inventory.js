const mongoose = require('mongoose')

const InvetorySchema = new mongoose.Schema({
    name:{
        type: string,
        required: true
    },
    
})