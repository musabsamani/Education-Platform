import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import EmailIcon from '@mui/icons-material/Email';

class Email extends Component {
    state = {
        show: false,
    }
    submit= e => {
        e.preventDefault()
        this.props.sendMail(e, "email")
    }
    handleClose = () => { this.setState({show:false}) };
    handleShow = () => { this.setState({show:true}) };
    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    <EmailIcon/>
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Send Email</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        
                    <Form>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="som3a"
                            autoFocus
                        />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="name@example.com"
                            autoFocus
                        />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Subject</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="subject"
                            autoFocus
                        />
                        </Form.Group>
                        <Form.Group
                        className="mb-3"
                        controlId="exampleForm.ControlTextarea1"
                        >
                        <Form.Label>The Message</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={this.handleClose}>
                        Close
                    </Button>
                    <Button type='submit' variant="primary" onClick={this.submit}>
                        Submit
                    </Button>
                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default Email;
    // <>
    //     <form onSubmit={e => this.submit(e)} action="" id="email" style={{ margin: "10px" }}>
    //         <div><input type="text" name="name" placeholder='your name' /></div>
    //         <div><input type="email" name="email" placeholder='To email' /></div>
    //         <div><input type="text" name="subject" placeholder='subject' /></div>
    //         <div><textarea cols="30" name="message" rows="10" placeholder='message'></textarea></div>
    //         <div> <button type='submit'>send</button></div>
    //     </form>
    // </>