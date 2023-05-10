import React from 'react'

export const Button = ({link, text}) => {
  return (
    <a className='button-style' href={link}>{text}</a>
  )
}

export default Button
