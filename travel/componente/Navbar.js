import Link from 'next/link'
import React from 'react';
import { GiWorld } from 'react-icons/gi';


const Navbar = () => {
    return (
        <div className='sectiune-navbar'>
            
            <div className='navbar'>

                <div className='nav-link'>
                    <span className='logo-1'>Travel the</span>
                    <span className='logo-2'>WORLD</span>
                    <GiWorld/>
                </div>

               

                <div className='menu-link'>
                    <Link legacyBehavior href="/"><a className='acasa-link'>Acasa</a></Link>
                    <Link legacyBehavior href="#destinatii"><a className='destinatii-link'>Destinatii turistice</a></Link>
                    <Link legacyBehavior href="#info"><a className='destinatii-link'>Informatii sejururi</a></Link>
                </div>

                <div>
                <a href="#contact" class="contact">Contact</a>
                </div>
            </div>
        </div>
    )
}

export default Navbar