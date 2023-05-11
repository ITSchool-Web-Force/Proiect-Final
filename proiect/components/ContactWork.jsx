import React from 'react'
import Link from 'next/link';

const ContactWork = ({heading, message, instagram}) => (
    <div className="flex items-center justify-center h-screen 
    bg-fixed bg-center bg-cover custom-img-contact">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]" />
      <div className="p-5 text-white z-[2] mt-[-10rem]">
        <p className="text-5xl font-bold">{heading}</p>
        <Link className='hover:text-gray-500' href='https://www.instagram.com/adelinvisuals/'>{instagram}</Link>
        <p className="text-2xl font-bold py-5">{message}</p>
      </div>
    </div>
  );
  
  export default ContactWork;
  