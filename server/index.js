const express = require('express') 
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const InventoryModel = require('./models/Inventory')

app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://norf:norf@cluster0.5zzej.mongodb.net/inventory?retryWrites=true&w=majority')

app.get('/inventory', async(req,res)=>{
    InventoryModel.find({},(err,result)=>{
        try {
            res.json(result)
        } catch (err) {
            res.send(err)
        }
    })
})


app.listen(3001, ()=>{console.log(`connected to port 3001`)})