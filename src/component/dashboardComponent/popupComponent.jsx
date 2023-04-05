import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PDFUploader from '../../viewPdf';
import Videohandler from './videohandler';
class PopupComponent extends Component {
    state = {
        values: [true],
        fullscreen: true,
        show: false,
    }

    handleShow(breakpoint) {
        //   setFullscreen(breakpoint);
        const breakp = breakpoint;
        this.setState({ fullscreen: breakp })
        this.setState({ show: true })
    }
    handleClose = () => {
        this.setState({ show: false })
    }
    render() {
        const { lesson } = this.props
        return (
            <>
                {this.state.values.map((v, idx) => (
                    <Button key={idx} className="me-2 mb-2" onClick={() => this.handleShow(v)}>
                        Show Conetent
                        {typeof v === 'string' && `below ${v.split('-')[0]}`}
                    </Button>
                ))}
                <Modal show={this.state.show} fullscreen={this.state.fullscreen} onHide={() => this.handleClose()}>
                    <Modal.Header closeButton>
                        <Modal.Title>{lesson.subject && lesson.subject.code}</Modal.Title>
                        <Modal.Title>{lesson.name && lesson.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {lesson.file}
                        <hr />
                        {lesson && <PDFUploader file={lesson.file} />}
                        {lesson && <Videohandler file={lesson.file} />}
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default PopupComponent;