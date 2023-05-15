import Layout from "@/components/Layout";
import MyForm from "../../components/MyForm";
import MyLocation from "../../components/MyLocation";
import Image from "next/image";
import contactbanner from "../../images/showroom-contact.jpg";

function Contact() {
  return (
    <Layout>
      <Image
        src={contactbanner}
        width={2000}
        height={500}
        alt="showroom-interior"
        className="contact-img"
      />
      <MyForm />
      <MyLocation />
    </Layout>
  );
}

export default Contact;
