import React, { useRef } from 'react'
import { PROFILE } from '../constants'
import { RiArrowRightUpFill } from '@remixicon/react'
import Narendra from "../assets/profile.jpg"
const Hero = () => {
    const heroref = useRef(null)
  return (
    <section ref={heroref} id="Home" className=' min-h-screen flex flex-col justify-center items-center gap-4 lg:gap-6'>
        <div className='mt-20 '>
        <h1 className='uppercase text-4xl lg:text-7xl text-center mb-2'>{PROFILE.name}</h1>
        <h2 className='text-center bg-gradient-to-b from bg-pink-200 to bg-purple-300 bg-clip-text text-transparent text-2xl lg:text-4xl tracking-tighter'>{PROFILE.role}</h2>
        </div>
        <p className='text-xl text-center tracking-tighter max-w-2xl lg:2xl p-2'>{PROFILE.subheading}</p>
        <a href='/Narendraresume.pdf' target='_blank' rel='noopener noreferrer' download  className='flex gap-1 mb-6 text-center border rounded-full px-3 py-2 border-purple-300'>
            <span>download resume</span>
            <span>
                <RiArrowRightUpFill/>
            </span>
        </a>
        <img src={Narendra} alt='Narendra profile ' width={350} height={350} className='border rounded-2xl border-purple-200'/>

    </section>
  )
}

export default Hero