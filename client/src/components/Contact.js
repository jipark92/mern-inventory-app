import {Form, Button} from 'react-bootstrap'

export default function Contact() {
    return (
        <div className='contact-container'>
            <h1>Contact</h1>
            <form action="" method="">
                <Form.Group className="mb-auto" controlId="exampleForm.ControlInput1">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="email" placeholder="Name..." />
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="email" placeholder="Phone Number..." />
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Email..." />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Comment</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <div className="d-grid gap-2">
                    <Button variant="primary" size="lg">Submit</Button>
                </div>
            </form>
            <div className='credit-container'>
                <a href="https://github.com/norfkorean/mern-inventory-app" target="_blank" rel="noreferrer"><img src="https://img.icons8.com/material-outlined/344/github.png"></img>Ji Park</a>
            </div>
        </div>
    )
}