import React from 'react'
import { CONTACT } from '../constants'
import {motion} from 'framer-motion'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
// framer preset


// real code
const Contact = () => {
  return (
    <div className='border-t border-stone-900 pb-20'>
      <motion.h2 
      whileInView={{opacity:1,y:0}}
      initial={{opacity:1,y:-100}}
      transition={{duration:0.5}}
      className='my-10 text-center text-4xl'>Get In Touch</motion.h2>
      <div className='text-center tracking-tighter'>
        <motion.p
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0,x:-100}}
        transition={{duration:1}}
        className='my-4'>
            {CONTACT.phoneNo}
        </motion.p>
        <a 
        
        href="#" className='border-b'>
            {CONTACT.email}
        </a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>

     <a href="https://www.linkedin.com/in/saksham-kanojia-7895b7217/"
     target='_blank' rel='noopener noreferrer'
     aria-label="LinkedIn">
        <FaLinkedin/>
     </a>

     <a href="https://github.com/sakshamkanojia19"
     target='_blank' rel='noopener noreferrer'
     aria-label="GitHub">
        <FaGithub/>
     </a>

  </div>
    </div>
  )
}

export default Contact
