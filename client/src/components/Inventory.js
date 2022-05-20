import Axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function Inventory() {
    //read 
    const [inventory, setInventory] = useState([])

    useEffect(()=>{
        Axios.get('http://localhost:3001/inventory')
        .then(res=>{
            setInventory(res.data)
        })
    },[inventory])

    //update
    const [updateGrocery, setUpdateGrocery] = useState("")

    const updateItem = (id) => {
        console.log('clicked')
        Axios.put('http://localhost:3001/update',{
            id: id,
            newGroceryName: updateGrocery
        })
    }

    //delete
    const deleteItem = (id) =>{
        Axios.delete(`http://localhost:3001/delete/${id}`)
    }

    return (
        <div className="inventory-container">
            <h1>Grocery Basket</h1>
            <Link to="/add" className='add-grocery-link'>Add Grocery</Link>
            {inventory.map((inv,i)=>{
                return(
                    <div className='basket-container' key={i}>
                        <p>#{i}</p>
                        <p>Item: {inv.name}</p>
                        <p>Quantity: {inv.quantity}</p>
                        <p>Price: ${inv.price}</p>
                        <p>Detail: {inv.detail}</p>
                        <div className='btns-container'>
                        <div>
                            <input 
                                type='text'
                                placeholder='New Item Name'
                                onChange={(e)=>{setUpdateGrocery(e.target.value)}}
                            />
                            <button className='bg-primary text-light' onClick={()=>updateItem(inv._id)}>EDIT</button>
                            <button className='bg-danger text-light' onClick={()=>deleteItem(inv._id)}>DELETE</button>
                        </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}