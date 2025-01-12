import React from "react";
import profilePic from "../assets/profilepic.png";
import "./Hero.css";
import { HERO_CONTENT } from "../constants";
import { delay, motion, stagger } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transiton: { duration: 0.5,
       staggerChildern: 0.5 ,
      }
  }
}


const childVariants = {
  hidden:{opacity :0,x:-100},
  visible : { opacity:1,x:0,transition:{duration:0.5}}
}

// real code
const Hero = () => {
  return (
    <div className="pb-4 lg:mb-36">
      <div className="flex flex-wrap lg:flex-row-reverse">
        <div className="w-full lg:w-1/2">
          <div className="flex justify-center lg:p-8 ">
            {/* with framer motion below */}
            <motion.img
             src={profilePic} 
             alt="saksham pic"
             className="resize"
            
            initial ={{x: 100, opacity : 0}}
            animate={{x:0,opacity:1}}
            transition={{duration:1, delay:1.5}} />
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <motion.div 
          initial="hidden"
          animate="visible"
          variants={containerVariants} className="flex flex-col items-center lg:items-start mt-10">
            <motion.h2 
            variants={childVariants}
            className="pb-2 text-4xl tracking-tighter lg:text-8xl">
              Saksham Kanojia
            </motion.h2>
            <motion.span
            variants={childVariants}
             className="bg-gradient-to-r from-stone-300 to-stone-600 bg-clip-text text-3xl tracking-tight text-transparent  ">
              Full Stack Developer | Data Analyst
            </motion.span>
            <motion.p 
            variants={childVariants}
            className="my-2 max-w-lg py-6 text-xl leading-relaxed tracking-tighter">
              {HERO_CONTENT}
            </motion.p>

            <motion.a
            variants={childVariants}
              href="https://drive.google.com/drive/folders/1F291vBTK2AzuqvlKGYP3suQex-3pj32s?usp=sharing"
              target="_blank"
              rel="noopener noreferre"
              download
              className="bg-white rounded-full p-4 text-sm text-black"
            >
              {" "}
              Download Resume/CV ↓
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
