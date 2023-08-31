import React from 'react'
import ContactForm from './ContactForm'

function ContactWork() {
  return (
    <div className='px-7 max-w-[600px] mt-12 custom-contact-bg bg-no-repeat bg-cover bg-center py-20 rounded-lg mx-auto'>
      <h1 className='text-3xl font-bold'>Contact Me</h1>
      <p>Please fill the form below</p>
      <ContactForm />
    </div>
  )
}

export default ContactWork