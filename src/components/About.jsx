import React from 'react'
import { motion } from 'framer-motion' 
import { Tilt } from 'react-tilt'
import {styles} from "../styles"
import {services} from "../constants"
import {fadeIn , textVariant } from "../utils/motion"



const About = () => {
  return (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText }>About Me</p>
      <p>Hi I am Rashi Sharma a Software Engineer</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident laboriosam dolorem perferendis excepturi mollitia porro soluta saepe ut, nobis doloremque quibusdam minus.</p>
      </motion.div>
  </>
  )
}

export default About