import React, { useRef } from 'react'
import { TESTIMONIAL } from '../constants'
const Testimonials = () => {
    const testimonialref = useRef(null)
  return (
    <section className='py-16' ref={testimonialref} id="testimonials">
        <h2 className='text-3xl lg:text-4xl font-semibold text-center mb-6'>Testimonials</h2>
        <div className='px-6'>
            <div className='flex flex-col items-center text-center '>
                <img src={TESTIMONIAL.image} className='w-24 h-24 rounded-full mb-4 border-4'/>
                <blockquote className='max-w-full leading-relaxed text-lg lg:text-xl'> &quot; {TESTIMONIAL.quote} &quot;</blockquote>

            </div>
            <div className='mt-4 text-center'>
                    <p className='text-lg lg:text-xl'>{TESTIMONIAL.name}</p>
                    <p className='text-sm'>{TESTIMONIAL.title}</p>
            </div>
        </div>
        
    </section>
  )
}

export default Testimonials