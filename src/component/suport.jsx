import React, { useState } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Form from 'react-bootstrap/Form';
import Footer from './footer';
import {NavLink} from 'react-router-dom'

function Suport() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
  return (
   
    <>
    <div className='border border-5 border-dark m-3 p-3' >
    <div className='border border-warning m-5 p-3  ' >
        <div className='border  border-danger m-5 p-3 d-grid'>
            <div>
                <h1 className=' d-flex justify-content-center p-1 text-danger'>فروشگاه خانواده هلن</h1>
            </div>
            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>کد پیگیری</Form.Label>
        <Form.Control type="password" placeholder="335467879990" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>منتظر نظرات و انتقادات شما هستیم</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      
          <Button variant="secondary">
            <NavLink to="/" className="text-reset text-decoration-none">خروج</NavLink>
          </Button>
          <Button variant="danger" onClick={handleClose}>
           ثبت و ارسال
          </Button>
        
    </Form>
          </div>  
        </div>
    </div>
  
    </>
  );
}

export default Suport;