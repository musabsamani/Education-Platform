import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import EmailIcon from '@mui/icons-material/Email';
import Input from './include/_input';

class Demail extends Component {
    state = {
        show: true,
    }
    submit = e => {
        console.log(e);
        e.preventDefault()
        this.props.sendMail(e)
    }
    render() {
        return (
            <>
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
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control
                                    type="email"
                                    name="email"
                                    placeholder="name@example.com"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label>Subject</Form.Label>
                                <Form.Control
                                    type="text"
                                    name="subject"
                                    placeholder="subject"
                                    autoFocus
                                />
                            </Form.Group>
                            <Form.Group
                                className="mb-3"
                                controlId="exampleForm.ControlTextarea1"
                            >
                                <Form.Label>The Message</Form.Label>
                                <Form.Control as="textarea" rows={3} name="message" />
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

// <form onSubmit={e => this.submit(e)}>
//     <Input name='name' type='text' onChange={this.props.Dmsg && this.props.Dmsg.volunteer.name} value={this.props.Dmsg && this.props.Dmsg.volunteer.name} />
//     <Input name='email' type='email' onChange={this.props.Dmsg && this.props.Dmsg.volunteer.email} value={this.props.Dmsg && this.props.Dmsg.volunteer.email} />
//     <Input name='subject' type='text' value="Session Alert !!" />
//     <Input name="message" type='text' value={`You have session with information :\n
//                                     Lesson Name : ${this.props.Dmsg.lesson.name} \n
//                                     Room : ${this.props.Dmsg.room.name} \n
//                                     Start Date Time : ${this.props.Dmsg.start} \n
//                                     End Date Time : ${this.props.Dmsg.end} \n`}
//     />
// </form>