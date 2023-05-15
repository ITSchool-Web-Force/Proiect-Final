import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Cart from './Cart';
import style from "../styles/CheckoutForm.module.css"

export default function CheckoutForm (props) {
  const [visible, setVisible] = useState(true);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {totalAmount} =  props;

  return (
    <>
    <form method="POST" name="checkout-contact-form" action="contact/?success=true" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="checkout-form-name" value="checkout-contact-form" />
      <Button variant="success" onClick={handleShow}>
        Checkout
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill in the details for your order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your name"
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Your address"
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
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Your comments</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <p className={style.total_amount}>Total amount to pay: {totalAmount}$</p>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button className={style.button_style} type="submit" id="submit" value="Send"
            onClick={(event) => setVisible(!visible)}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
      </form>
    </>
  );
}
