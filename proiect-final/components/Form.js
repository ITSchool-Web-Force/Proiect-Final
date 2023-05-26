import style from "../styles/Form.module.css"

export default function Form() {
    return <>
        <form className={style.contact_form} form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <h1 className={style.title}>Contact us</h1>
            <label className={style.form_group}>
                Name
                <input type="text" name="name" placeholder="Name" required/>
            </label>
            <label class={style.form_group}>
                Email
                <input type="email" name="email" placeholder="user@domain.ext" required/>
            </label>
            <label className={style.form_group}>
                Message
            <textarea placeholder="Contact us" name="message" required>
            </textarea>
            </label>
            <div className={style.checkbox_group}>
                <input type="checkbox" id="val1" name="accept" required/>
                <label for="val1">I read the terms and conditions</label>
            </div>
            <div className={style.btn_group}>
                <button className={style.button_style} type="reset" value="Reset the form">Reset the form</button>
                <button className={style.button_style} type="submit" id="submit" value="Send">
                    Send
                </button>
            </div>
        </form>
    </>
}