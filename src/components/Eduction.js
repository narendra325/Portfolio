import React, { useRef } from 'react'
import { EDUCATION } from '../constants'

export const Eduction = () => {
    const educationref = useRef(null)
  return (
    <section className='py-16 ' id="education" ref={educationref}>
            <div className=' mx-auto max-w-full px-4'>
            <h2 className='text-center font-semibold text-2xl lg:text-4xl mb-6'>Education</h2>
            <div className='flex flex-col  space-y-7'>
                {EDUCATION.map((grade)=>{
                    return(
                        <div key={grade.id} className =" border p-7 border-purple-300/20 rounded-xl">
                            <h3 className='text-xl lg:text-2xl mb-2 bg-gradient-to-t from bg-pink-300 to bg-purple-300 bg-clip-text text-transparent'>{grade.degree}</h3>
                            <h4 className='text-md font-medium mb-2'>{grade.duration}</h4>
                            <p className='text-sm mb-2 lg:text-base'>{grade.institution}</p>
                            {grade.Percentage? <p className='text-sm mb-2 lg:text-base'> Grade : {grade.Percentage}</p> : ""}
                            <p className='text-md lg:text-lg'>{grade.description}</p>
                        </div>
                     
                    )
                })}

            </div>
            </div>
    </section>
  )
}
