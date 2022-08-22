import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import styles from './report_button.module.css';

const ReportButton = (props) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const post = "post!";

    return (
        <>
            <button className={styles.footbarButton} onClick={handleShow}>
                <span>
                    <i className="fa-solid fa-triangle-exclamation"></i>
                </span>
                <span>
                    Report
                </span>
            </button>

            <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>
                    <span className='me-1'>
                        <i className="fa-solid fa-triangle-exclamation"></i>
                    </span>
                    <span>
                        Report
                    </span>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Report the following post.</Form.Label>
                        <div className={styles.postBox}>
                            <p className={styles.post}>
                                {post}
                            </p>
                        </div>
                </Form.Group>
                <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                >
                    <Form.Label>Reason for report</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancle
                </Button>
                <Button variant="danger" onClick={handleClose}>
                    Report
                </Button>
            </Modal.Footer>
            </Modal>
        </>
    );
}

export default ReportButton;