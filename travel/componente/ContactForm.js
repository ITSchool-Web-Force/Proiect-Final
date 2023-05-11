import   {useRef}  from "react";
import emailjs from '@emailjs/browser';



const ContactForm = () => {
    const form = useRef ()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm(
        'service_eylhm5u', 
        'template_ai6judg', 
        form.current, 
        'jsy1x36764ITZj6m9')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };
    
    return (
    <section id="contact">
        <div className="container">
            <form ref={form} onSubmit={sendEmail} className="form">

                <input type="text" 
                placeholder="Nume" 
                name="user_name" required/>

                <input type="email" 
                placeholder="Email" 
                name="user_email" required/>

                <input type="text" 
                placeholder="Subiect" 
                name="subject" required/>
                
                <textarea name="message" cols="30" 
                rows="10"></textarea>
                <button type="submit">Trimite mesajul</button>

            </form>
        </div>
    </section>
  )
}

export default ContactForm;