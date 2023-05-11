import Footer from "../../components/Footer";
import MyNavbar from "../../components/MyNavbar";
import MyForm from "../../components/MyForm";
import Image from "next/image";
import contactbanner from "../../images/showroom-contact.jpg";

function Contact() {
  return (
    <div>
      <MyNavbar />
      <Image
        src={contactbanner}
        width={2000}
        height={500}
        alt="showroom-interior"
        className="contact-img"
      />
      <MyForm />
      <Footer />
    </div>
  );
}

export default Contact;
