"use client"

import React from 'react'
import SectionHeading from './section-heading'
import {motion} from 'framer-motion'


export default function About() {
  return (
    <motion.section className='mb-28 max-w-[45rem] text-center leading-8 sm:mb-40'
    initial={{ opacity:0,y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay: 0.175}}
    >
      <SectionHeading>About me</SectionHeading>
      <p className='mb-3'>
      I have some knowledge with object-oriented programming, but recently my focus of study is on frontend programming.
      </p>
      <p>
      Currently working in a <span className='font-medium'> software house</span> developing features for web and mobile apps.


      </p>
    </motion.section>
  )
}
