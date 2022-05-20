import {useState} from 'react'
import Axios from 'axios'

export default function UpdateGrocery(props) {

    const [updateGrocery, setUpdateGrocery] = useState("")

    const updateItem = (id) => {
        console.log('clicked')
        Axios.put('http://localhost:3001/update',{
            id: id,
            newGroceryName: updateGrocery
        })
    }
    
    return (
        <div className="update-grocery-container">
            <h1> Update Grocery</h1>
            <div>
                <input 
                    type='text'
                    onChange={(e)=>{setUpdateGrocery(e.target.value)}}
                />
                <button className='bg-primary text-light' onClick={()=>updateItem(inv._id)}>EDIT</button>
            </div>
        </div>
    )
}
