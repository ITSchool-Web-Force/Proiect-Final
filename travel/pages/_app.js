import Navbar from '../componente/Navbar'
import '@/styles/globals.css';
import Informatii from '../componente/Informatii'
import Footer from '@/componente/Footer';
import ContactForm from "../componente/ContactForm";


 function Travel({ Component, pageProps }) {
 
    return (
        <>
        <Navbar/>
        <Component {...pageProps}/>
        <Informatii />
        <ContactForm />
        <Footer/>
        </>
    )

}


export default Travel;

