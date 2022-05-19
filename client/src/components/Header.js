import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function Header() {
    return (
    <Navbar bg="info" variant="light">
        <Container>
            <Navbar.Brand href="#" className='h1'>MERN INVENTORY APP</Navbar.Brand>
                <Nav className="nav-container me-auto">
                    <Link to="/">Home</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </Nav>
        </Container>
    </Navbar>
    )
}