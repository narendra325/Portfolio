import React, { useRef } from 'react'
import { SKILLS } from '../constants'

const Skills = () => {
    const skillsref = useRef(null)
  return (
    <section className='py-16' ref={skillsref} id="skills">
        <div className='px-4'>
            <h2 className='mb-10 text-center lg:text-4xl font-bold text-3xl'>Skills</h2>
            <div className='grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4'>
                {SKILLS.map((skill)=>{
                    return(
                        <div className='flex flex-col items-center text-center'>
                            <div className='mb-4'>
                                {skill.icon}
                            </div>
                            <div className='mb-4'>
                                {skill.name}
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>


    </section>
  )
}

export default Skills