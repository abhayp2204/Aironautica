import React from 'react'
import { BallCanvas } from './canvas'
import SectionWrapper from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
    return (
        <div className='mt-[1200px] w-[800px] flex flex-row flex-wrap items-center justify-center gap-10'>
            {technologies.map((technology, index) => (
                <div className='w-28 h-28' key={technology.name}>
                    <BallCanvas icon={technology.icon} />
                </div>
            ))}
        </div>
    )
}

export default Tech