import Axios from 'axios'
import {useState, useEffect} from 'react'

export default function Inventory() {

    const [inventory, setInventory] = useState([])

    useEffect(()=>{
        Axios.get('http://localhost:3001/inventory')
        .then(res=>{
            setInventory(res.data)
        })
        
    },[])

    

    return (
        <div className="inventory-container">
            <h1>Grocery Basket</h1>
            {inventory.map((inv,i)=>{
                return(
                    <div className='basket-container' key={i}>
                        <p>#{i}</p>
                        <p>Item: {inv.name}</p>
                        <p>Quantity: {inv.quantity}</p>
                        <p>Detail: {inv.detail}</p>
                    </div>
                )
            })}
        </div>
    )
}