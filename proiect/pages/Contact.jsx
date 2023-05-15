import React from 'react'
import { Navbar,ContactWork } from '../components'

function Contact() {
  return (
    <div>
      <Navbar />
      <ContactWork heading='Contact Me On Instagram' 
      instagram='https://www.instagram.com/adelinvisuals/' 
      message='Message Me At adetuduri@yahoo.com'/>
    </div>
  )
}

export default Contact