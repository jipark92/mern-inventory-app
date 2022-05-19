import Axios from 'axios'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

export default function Inventory() {

    const [inventory, setInventory] = useState([])

    useEffect(()=>{
        Axios.get('http://localhost:3001/inventory')
        .then(res=>{
            setInventory(res.data)
        })
    },[])

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
                        <p>Detail: {inv.detail}</p>
                        <div className='btns-container'>
                            <Link to="/update">
                                <button className='bg-primary text-light'>EDIT</button>
                            </Link>
                            <button className='bg-danger text-light' onClick={()=>deleteItem(inv._id)}>DELETE</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}