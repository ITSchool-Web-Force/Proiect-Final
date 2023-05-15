import style from "../styles/Form.module.css"
import { useState } from "react";

export default function CheckoutForm() {
  const [visible, setVisible] = useState(true);
   
  return <>
    <form method="POST" name="checkout-contact-form" action="contact/?success=true" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="checkout-contact-form" />
      <h1 className={style.title}>Fill in the details of your order</h1>
          <label className={style.form_group}>
              Name
              <input type="text" name="name" placeholder="Name" required/>
          </label>
          <label className={style.form_group}>
              Address
              <input type="text" name="address" placeholder="Address" required/>
          </label>
          <label class={style.form_group}>
              Email
          <input type="email" name="email" placeholder="user@domain.ext" required/>
          </label>
          <label className={style.form_group}>
              Message
          <textarea placeholder="fill in your remarks" name="message" required>
          </textarea>
          </label>
          <div className={style.checkbox_group}>
              <input type="checkbox" id="val1" name="accept" required/>
              <label for="val1">I read the terms and conditions</label>
          </div>
          <div className={style.btn_group}>
              <button className={style.button_style} type="reset" value="Reset the form">Reset the form</button>
              <button className={style.button_style} type="submit" id="submit" value="Send"
              onClick={(event) => setVisible(!visible)}>
                Send
              </button>
          </div>
      </form>
  </>
}
