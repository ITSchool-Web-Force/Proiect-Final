import React, { useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image"
import Layout from "@/components/Layout";
import Link from "next/link";

const ContactPage = () => {
  const [submitterName, setSubmitterName] = useState("");
  const router = useRouter();
  const confirmationScreenVisible =
  router.query?.success && router.query.success === "true";
  const formVisible = !confirmationScreenVisible;

  const ConfirmationMessage = (
    <React.Fragment>
      <p>
        Thank you for submitting this form. Someone should get back to you
        within 24-48 hours.
      </p>

      <button
        onClick={() => router.replace("/contact", undefined, { shallow: true })}
      >
        Submit Another Response
      </button>
    </React.Fragment>
  );

  const ContactForm = (
    <div className="relative flex flex-wrap lg:h-screen lg:items-center">
    <form 
      className="mx-auto mb-0 mt-8 max-w-md space-y-4"
      method="POST"
      name="contact-form"
      action="contact/?success=true"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <div class="mb-6">
  
      <input
        type="hidden"
        name="subject"
        value={`You've got mail from ${submitterName}`}
      />
      <input type="hidden" name="form-name" value="contact-form" />
      <p hidden>
        <label>
          Do not fill this out: <input name="bot-field" />
        </label>
      </p>

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name *</label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="name"
        name="name"
        required
        onChange={(e) => setSubmitterName(e.target.value)}
        type="text"
      />
      <label className="block text-gray-700 text-sm font-bold mb-2"htmlFor="phone">Phone number </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phone" name="phone" required type="text" />
      <label className="block text-gray-700 text-sm font-bold mb-2"htmlFor="email">E-mail Address </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" name="email" required />
      <label className="block text-gray-700 text-sm font-bold mb-2"htmlFor="message">Message </label>
      <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" name="message" required />
      <button className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"> Submit </button>
      <Link href="/">  Back </Link>
      </div>
      
    </form>
    </div>
  );

  return (
    <Layout>
    <div className="container">
      <Head>
        <title>Java Jive Coffee Shop</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="relative flex flex-wrap lg:h-screen lg:items-center">
        <div className="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-lg text-center">
            <h1 className="text-2xl font-bold sm:text-3xl">Contact us</h1>
              <p> Got questions? We've got answers.</p>
                <Image   className=" inset-0 h-full w-full object-cover"src= "/image/banner7.jpg" alt="fresh coffee" width={600} height={600}/>
                  <main>{formVisible ? ContactForm : ConfirmationMessage}</main>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}

export default ContactPage