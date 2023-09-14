import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import PDFUploader from '../../viewPdf';
import Videohandler from '../include/videohandler';

class PopupComponent extends Component {
    state = {
        values: [true],
        fullscreen: true,
        show: false,
    }
    // lessonn = {
    //     _id: "998b552208c349ffd965c58e",
    //     subject: new ObjectId("ed92f0ec7d5c9916c31164f0"),
    //     name: "Back-End Start kick",
    //     content: "this is content\r\n",
    //     file: [
    //         {
    //             fileType: "pdf",
    //             filePath: "uploads\\lesson\\20230414T004131.811Z-file-Computer_Graphics_with_OpenGL_4th_ed_Hearn,_Baker_&_Carithers_2013.pdf",
    //         },
    //         {
    //             fileType: "video",
    //             filePath: "uploads\\lesson\\20230414T004132.465Z-file-CRT How to work_144p.mp4",
    //         },
    //         {
    //             fileType: "audio",
    //             filePath: "uploads\\lesson\\20230414T004132.539Z-file-g3.ogg",
    //         }
    //     ],
    // };
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
                        {
                            // fileTypes = ["image", "video", "audio", "pdf","unknown"]
                            // lesson file structue  
                            // fileType : [type here]  
                            // filePath : [path here]  
                            // lesson exapmle line 13 in this same file
                            // code implemented in line 85 here
                        }
                        <>
                            {/* <div className='d-flex flex-column justify-content-around' width='100%'>
                            {lesson.file && lesson.file.forEach((file => {
                                    {
                                        file.fileType === "video"
                                            ?
                                            <div className="col g-4 mb-4">
                                                {lesson && <Videohandler file={file.filePath} />}
                                            </div>
                                            :
                                            ""
                                    }
                                    {
                                        file.fileType === "pdf"
                                            ?
                                            <div className="col g-4 mb-4">
                                                {lesson && <PDFUploader file={file.filePath} />}
                                            </div>
                                            :
                                            ""
                                    }


                                    <div className="col g-4 mb-4">
                                        {/* {lesson && <Videohandler file={lesson.file} />} 
                                    </div>
                                }))}
                            */}

                            <div className='d-flex flex-column justify-content-around' width='100%'>
                                {
                                    lesson.file[0] && lesson.file[0].fileType === "video"
                                        ?
                                        <div className="col g-4 mb-4">
                                            {lesson.file[0] && <Videohandler file={lesson.file[0].filePath} />}
                                        </div>
                                        :
                                        ""
                                }
                                {
                                    lesson.file[0] && lesson.file[0].fileType === "pdf"
                                        ?
                                        <div className="col g-4 mb-4">
                                            {lesson.file[0] && <PDFUploader file={lesson.file[0].filePath} />}
                                        </div>
                                        :
                                        ""
                                }
                                <hr />
                            </div>
                        </>
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}

export default PopupComponent;