import style from "../styles/Form.module.css"

export default function CheckoutForm() {
     
  return <>
    <form className={style.contact_form} form name="contact-form" action="/success/" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
      <input type="hidden" name="form-name" value="contact-form"/>
        <div className={style.form_style}>
        <h1 className={style.title}>Fill in the details of your order</h1>
          <label className={style.form_group}>
              Name
              <input type="text" name="checkbox_name" placeholder="Name" required/>
          </label>
          <label className={style.form_group}>
              Address
              <input type="text" name="checkbox_address" placeholder="Address" required/>
          </label>
          <label class={style.form_group}>
              Email
          <input type="email" name="checkbox_email" placeholder="user@domain.ext" required/>
          </label>
          <label className={style.form_group}>
              Message
          <textarea placeholder="fill in your remarks" name="message" required>
          </textarea>
          </label>
          <div className={style.checkbox_group}>
              <input type="checkbox" name="checkbox_accept" required/>
              <label for="val1">I read the terms and conditions</label>
          </div>
          <div className={style.btn_group}>
              <button className={style.button_style} type="reset" value="Reset the form">
                Reset the form
              </button>
              <button className={style.button_style} type="submit" value="Send order">
                Send
              </button>
          </div>
        </div>
      </form>
  </>
}
