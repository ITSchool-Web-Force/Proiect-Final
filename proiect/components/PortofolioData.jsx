import React from 'react'
import Image from 'next/image'
import WorkImg1 from '@/pages/images/pImg1.jpg'
import WorkImg2 from '@/pages/images/pImg2.jpg'
import WorkImg3 from '@/pages/images/pImg3.jpg'
import WorkImg4 from '@/pages/images/pImg4.jpg'
import WorkImg5 from '@/pages/images/pImg5.jpg'
import WorkImg6 from '@/pages/images/pImg6.jpg'
import WorkImg7 from '@/pages/images/pImg7.jpg'
import WorkImg8 from '@/pages/images/pImg8.jpg'
import WorkImg9 from '@/pages/images/pImg9.jpg'
import WorkImg10 from '@/pages/images/pImg10.jpg'


function PortofolioData() {
  return (
    <div>
      <h1 className='text-2xl font-bold flex justify-center'>My Photos</h1>
      <div className='max-w-[1240px] mx-auto text-center py-2'>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-1.5 p-10'> 
            <Image src={WorkImg1}
            alt='/'
            width={200}
            layout='responsive'
            />
            <Image src={WorkImg2}
            alt='/'
            width={200}
            layout='responsive'
            />
            <Image src={WorkImg3}
            alt='/'
            width={200}
            layout='responsive'
            />
            <Image src={WorkImg4}
            alt='/'
            width={200}
            layout='responsive'
            />
            <Image src={WorkImg5}
            alt='/'
            width={200}
            layout='responsive'
            />
            <Image src={WorkImg6}
            alt='/'
            width={200}
            layout='responsive'
            />
            <Image src={WorkImg7}
            alt='/'
            width={200}
            layout='responsive'
            />
            <Image src={WorkImg8}
            alt='/'
            width={200}
            layout='responsive'
            />
            <Image src={WorkImg9}
            alt='/'
            width={200}
            layout='responsive'
            />
            <Image src={WorkImg10}
            alt='/'
            width={200}
            layout='responsive'
            />
        </div>
      </div>
    </div>
  )
}

export default PortofolioData