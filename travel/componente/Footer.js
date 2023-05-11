import React from 'react'
import { GiWorld } from 'react-icons/gi';
import Link from 'next/link';
import {FaFacebookSquare} from 'react-icons/fa'
import {IoLogoYoutube} from 'react-icons/io'
import {FaInstagramSquare} from 'react-icons/fa'
import {BsTwitter} from 'react-icons/bs'


const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-box'>    
            <div className='footer-asezare'>
            <   div className='nav-link'>
                    <span className='logo-footer-1'>Travel the</span>
                    <span className='logo-2'>WORLD</span>
                    <GiWorld/>
                </div>

                <div className='menu-link'>
                    <Link legacyBehavior href="/"><a className='acasa-link'>Acasa</a></Link>
                    <Link legacyBehavior href="#destinatii"><a className='destinatii-link'>Destinatii turistice</a></Link>
                </div>

                <div className='icons'>
                    <FaFacebookSquare className='facebook'/>
                    <IoLogoYoutube className='youtube'/>
                    <FaInstagramSquare className='instagram'/>
                    <BsTwitter className='twitter'/>
                </div>
            </div>
            <p className='designed'>Designed by Oana</p>
        </div>      
    </footer>
  )
}

export default Footer