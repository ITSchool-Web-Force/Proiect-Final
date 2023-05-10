
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Basket from './ShoppingCart';
import style from "../styles/Basket.module.css"

export default function CheckoutForm (props) {
  const [show, setShow] = useState(false);
  const {itemsPrice} = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="success" onClick={handleShow}>
        Checkout
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Fill in the details of your order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="your name"
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
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                placeholder="fill in your complete address"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Comments</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <div className={style.final_order}>
          <div>
            <strong>Final price:</strong>
          </div>
          <div>
            <strong>${itemsPrice}</strong>
          </div>
        </div>


        <Modal.Footer>
          <Button variant="dark" bg="light" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" bg="light" onClick={handleClose}>
            Send order
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}







{/*import { useState } from "react";
import style from "../styles/Form.module.css"


export default function CheckoutForm() {
    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal)
    }
    
   
    if(modal) {
    document.body.classList.add('active-modal')
    } else {
    document.body.classList.remove('active-modal')
    }
    
      return (
        <>
          <button onClick={(toggleModal) => setModal(!modal)}>
            asdfasdfdas
          </button>          
    
          {modal && (
                 <div className={style.background}>
                 <form className={style.contact_form} name="contact-form" method="POST" data-netlify="true">
                     <h1 className={style.title}>Comanda</h1>
                     <label className={style.form_group}>
                     Nume 
                     <input type="text" name="name" placeholder="Nume"/>
                     </label>
                     <label class={style.form_group}>
                     Email
                     <input type="email" name="email" placeholder="user@domain.ext"/>
                     </label>
                     <label className={style.form_group}>
                     Mesaj
                     <textarea placeholder="Contacteaza-ne" name="message">
                     </textarea>
                     </label>
                     <div className={style.checkbox_group}>
                     <input type="checkbox" id="val1" name="accept"/>
                     <label for="val1">Am citit termenii si conditiile</label>
                     </div>
                     <div className={style.btn_group}>
                         <button className={style.button_style} type="reset" value="Reseteaza formular">Reseteaza formular</button>
                         <button className={style.button_style} type="submit" id="submit" value="Trimite">Trimite</button>
                     </div>
                 </form>
                 </div>
            

          )}
           </>
      );
    }
  */}

