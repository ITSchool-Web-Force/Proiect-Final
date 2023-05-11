import style from "../styles/Form.module.css"

export default function Form() {
    return <>
        <div className={style.background}>
        <form className={style.contact_form} name="contact-form" method="POST" data-netlify="true" action="contact/?success=true">
            <h1 className={style.title}>Contact us</h1>
            <label className={style.form_group}>
                Name
                <input type="text" name="name"  required placeholder="Name"/>
            </label>
            <label class={style.form_group}>
                Email
            <input type="email" name="email"  required placeholder="user@domain.ext"/>
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
                <button className={style.button_style} type="submit" id="submit" value="Trimite">Send</button>
            </div>
        </form>
        </div>
    </>
}