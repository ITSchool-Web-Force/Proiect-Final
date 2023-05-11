import React from 'react'
import { Navbar, MyWork,PortofolioData } from '../components'


function work() {
  return (
    <div>
      <Navbar />
      <MyWork heading='My Work' message='Acestea sunt pozele mele recente'/>
      <PortofolioData />
    </div>
  )
}
export default work