import Axios from 'axios'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

export default function AddGrocery() {
    //redirect
    const navigate = useNavigate();

    const [item, setItem] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [price, setPrice] = useState(0)
    const [detail, setDetail] = useState('')

    const addInventory = () => {
        console.log('clicked')
        Axios.post('https://mern-inventory-project.herokuapp.com/add',{
            name: item,
            quantity: quantity,
            price: price,
            detail: detail
        })        
        .then(res=>{
            // alert('item added')
        })
    }

    return (
        <div className="add-grcoery-container">
            <h1>Add Grocery</h1>
            <div>
                <p>Item: 
                    <input 
                    type='text'
                    onChange={(e)=>{setItem(e.target.value)}}
                    />
                </p>

                <p>Quantity: 
                    <input 
                    type='text'
                    onChange={(e)=>{setQuantity(e.target.value)}}
                    />
                </p>

                <p>Price: 
                    <input 
                    type='number'
                    onChange={(e)=>{setPrice(e.target.value)}}
                    />
                </p>

                <p>Detail: 
                    <input 
                    type='text'
                    onChange={(e)=>{setDetail(e.target.value)}}
                    />
                </p>
            </div>
            <button onClick={()=>{
                addInventory()
                navigate("/inventory/", { replace: true })
            }}>Add Grocery</button>
        </div>
    )
}