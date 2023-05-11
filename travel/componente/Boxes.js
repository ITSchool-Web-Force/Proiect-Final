import React from 'react'
import Button from './Button'

export const Boxes = ({image,title}) => {
  return (
    <div className='box'>
      <img src={image} className='img1'/>
      <div className='box-style'>
        <h3 className='titlu-destinatii'>{title}</h3>
        <Button link="#info" text="Mai multe informatii"/>
      </div>
    </div>
  )
}

export default Boxes

