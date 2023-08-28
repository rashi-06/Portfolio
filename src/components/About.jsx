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
      <p className={styles.sectionSubText} >Introduction</p>
      <h1 className={styles.sectionHeadText}>Observations.</h1>
      </motion.div>
  </>
  )
}

export default About