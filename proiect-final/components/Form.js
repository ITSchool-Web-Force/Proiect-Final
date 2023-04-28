import style from "../styles/Form.module.css"

export default function Form() {
    return <>
        <div className={style.background}>
        <form className={style.contact_form} name="contact-form" method="POST" data-netlify="true">
            <h1 className={style.title}>Contacteaza-ne</h1>
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
    </>
}