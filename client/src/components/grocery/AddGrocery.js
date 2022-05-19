import Axios from 'axios'
import {useState} from 'react'
import { useNavigate } from "react-router-dom";

export default function AddGrocery(props) {
    //redirect
    const navigate = useNavigate();

    const [item, setItem] = useState("")
    const [quantity, setQuantity] = useState(0)
    const [detail, setDetail] = useState('')

    const addInventory = () => {
        console.log('clicked')
        Axios.post('http://localhost:3001/add',{
            name: item,
            quantity: quantity,
            detail: detail
        })        
        .then(res=>{
            alert('item added')
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