import React from 'react'
import Titlu from './Titlu'
import Boxes from './Boxes'

export const Destinatii = () => {
  return (
    <section id='destinatii' className='sectiune-destinatii'>
        <Titlu title="Destinatii turistice"/>
        <div className='img-style'>
            <Boxes className="img2" image="../maldive.jpg" title="Maldive"/>
            <Boxes className="img2" image="../thailanda.jpg" title="Thailanda"/>
            <Boxes className="img2" image="../filipine.jpg" title="Filipine"/>
            <Boxes className="img2" image="../bali.jpg" title="Bali"/>
        </div>
    </section>
  )
}

export default Destinatii
