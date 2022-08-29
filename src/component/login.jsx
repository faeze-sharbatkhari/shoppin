import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

const Login=()=> {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} className='btn btn-light'>
        ورود
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header className='d-flex' >
            <div>
          <Modal.Title  className='p-1 text-danger'>HELEN</Modal.Title>
          <Modal.Title  className='p-1 text-danger'>ورود \ ثبت نام</Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
          </Form>
        </Modal.Body> 
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            خروج
          </Button>
          <Button variant="danger" onClick={handleClose}>
           ورود
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}



export default Login;