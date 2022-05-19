import {Link} from 'react-router-dom'

export default function Home() {
    return (
        <div className="home-container">
            <h1>Grocery Basket</h1>
            <p>Fill your inventory with your favorite groceries</p>
            <p>Don't forget about my Steak!</p>
            <Link to="/inventory">Take me to my basket</Link>
        </div>
    )
}