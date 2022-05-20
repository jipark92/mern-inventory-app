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

app.post('/add', async (req,res)=>{
    const grocery = req.body
    const newGrocery = new InventoryModel(grocery)
    await newGrocery.save()
    res.json(grocery)
})

app.put('/update', async (req,res)=>{
    const newGroceryName = req.body.newGroceryName;
    const id = req.body.id;

    try {
        InventoryModel.findById(id,(err,updatedGrocery)=>{
            updatedGrocery.name = newGroceryName
            updatedGrocery.save()
        })
    } catch (error) {
        console.log(error)
    }
})

app.delete('/delete/:id', async (req,res)=>{
    const id = req.params.id
    await InventoryModel.findByIdAndRemove(id).exec();
    
} )

app.listen(3001, ()=>{console.log(`connected to port 3001`)})