import React from 'react'
import { motion } from 'framer-motion' 
import { Tilt } from 'react-tilt'
import {styles} from "../styles"
import {services} from "../constants"
import {fadeIn , textVariant } from "../utils/motion"



const About = () => {
  return (
  <>
    <motion.div>
      <div>Introduction</div>
      <h1>Observations.</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptas illum, voluptatem suscipit optio autem accusamus doloribus fugiat impedit tenetur minus amet voluptatibus!</p>
    </motion.div>
  </>
  )
}

export default About