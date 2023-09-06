import React from 'react'
import { motion } from 'framer-motion' 
import { Tilt } from 'react-tilt'
import {styles} from "../styles"
import {services} from "../constants"
import {fadeIn , textVariant } from "../utils/motion"
import SectionWrapper from '../hoc/SectionWrapper'

const ServiceCard = ({index, title , icon}) =>{
  return(
    
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
       variants={fadeIn("right" , "spring" , 0.5*index , 0.8)} 
       className='w-full shadow-card p-[1px] rounded-[20px] green-pink-gradient' >
        <div
        option = {{
          max:45,
          scale: 1,
          speed : 450
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center'
        >
          <img src={icon} className='w-16 h-16 object-contain'/>
          <h3 className='text-center font-bold text-[20px]'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}



const About = () => {
  return (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText  }>About Me</p>
      <p>Hi I am Rashi Sharma a Software Engineer</p>
    </motion.div>

    <motion.p variants={fadeIn("" ,"" , 0.5 , 1)} className='mt-4 text-secondary  text-[17px] max-w-3xl leading-[30px]'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, minima commodi quis fugiat ipsam, aut reiciendis culpa quisquam id ipsa et est, veniam alias sapiente dolore officiis corrupti sed minus. A assumenda voluptatum quasi ipsam reprehenderit! Et quaerat culpa alias atque at eius accusamus in itaque sit dolores natus, eligendi ad deserunt rem. Iste natus cumque quos, suscipit alias reiciendis sequi temporibus molestiae, perferendis dolores, corporis provident? Labore explicabo magni perferendis in nihil. Eaque, alias amet. Expedita consequuntur quo, quisquam fugit dolores facilis dicta. Cupiditate, mollitia voluptates possimus in dignissimos est veritatis consequuntur ut, quidem, similique id natus esse adipisci!
    </motion.p>

    <div className='mt-20 flex flex-wrap gap-10'>
      {services.map((services , ind)=>(
        <ServiceCard  key={services.title} index={ind} {...services}/>
      ))}

    </div>
  </>
  )
}

export default SectionWrapper(About , "about");