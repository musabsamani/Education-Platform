import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import EmailIcon from '@mui/icons-material/Email';

class Demail extends Component {
    state = {
        show: false,
    }
    submit = e => {
        e.preventDefault()
        this.props.sendMail(e)
    }
    handleClose = () => { this.setState({ show: false }) };
    handleShow = () => { this.setState({ show: true }) };
    render() {
        return (
            <>
                <Button variant="primary" onClick={this.handleShow}>
                    <EmailIcon />
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Send Email</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <Form onSubmit={e => this.submit(e)}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="name"
                                    placeholder="Mohammed"
                                    autoFocus
                                    value={this.props.Dmsg && this.props.Dmsg.volunteer.name}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    autoFocus
                                    value={this.props.Dmsg && this.props.Dmsg.volunteer.email}
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="subject"
                                    placeholder="subject"
                                    autoFocus
                                    value="Session Alert !!"
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>The Message</Form.Label>
                                <Form.Control as="textarea"
                                    rows={3}
                                    name="message"
                                    value={`You have session with information :\n
                                    Lesson Name : ${this.props.Dmsg.lesson.name} \n 
                                    Room : ${this.props.Dmsg.room.name} \n 
                                    Start Date Time : ${this.props.Dmsg.start} \n 
                                    End Date Time : ${this.props.Dmsg.end} \n 
                                                   
                                    ` }
                                />
                            </Form.Group>
                            <Form.Group>
                                <Button variant="secondary" onClick={this.handleClose}>
                                    Close
                                </Button>
                                <Button type='submit' variant="primary">
                                    Submit
                                </Button>
                            </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>

                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}
export default Demail;