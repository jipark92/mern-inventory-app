import { Badge } from 'react-bootstrap'

export default function About() {
    return (
        <div className='about-container'>
            <h1>Tools used:</h1>
            <div className='badges-container'>
                <Badge bg="primary">React</Badge> 
                <Badge bg="secondary">Javascript</Badge>
                <Badge bg="success">Node</Badge> 
                <Badge bg="danger">MongoDB</Badge>
                <Badge bg="warning" text="dark"> Express</Badge>
                <Badge bg="info">Bootstrap</Badge>
            </div>
        </div>
    )
}