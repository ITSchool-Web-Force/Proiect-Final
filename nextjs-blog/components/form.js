import styles from '../styles/Home.module.css';


export default function ContactSubmission()  {
    return (
        <div className={styles.form}>
             <h1> Vino sa lucrezi pentru noi!</h1>
            <p>Completeaza formularul: </p>
            <div className={styles.form}>
            <form name="contact"  id="the-form" method="post" data-netlify="true">
                <div>
                    <label>Nume: <input 
                         type="text" 
                        name="name" />
                    </label>
                    <label>Telefon: <input 
                        type="number" 
                        name="phone"  
                        minlength="10" />
                    </label>
                    <label>Email: <input 
                        type="email" 
                        name="email" />
                    </label>
                    <label> Limba materna: <input 
                            type="text" 
                            name="language" ></input>
                    </label>
                    <label>Experienta/Autorizatie: 
                        <textarea></textarea>
                    </label>
                    <button type="submit">Trimite</button> 
                </div>
            </form>
            </div>
        </div>
    )
}
