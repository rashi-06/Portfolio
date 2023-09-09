import React from 'react'
import { VerticalTimeline , VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'
import "react-vertical-timeline-component/style.min.css"
import { styles } from '../styles'
import { SectionWrapper } from '../hoc'
import {textVariant} from "../utils/motion"
import { experiences } from '../constants'

const ExperienceCard = ({experience}) =>(
  
  <VerticalTimelineElement
   contentStyle={{background : '#1D1836' , color : '#fff'}} 
   contentArrowStyle={{borderRadius : '7px solid #232631'}}
   date={experience.date}
   iconStyle={{background : experience.iconBg}}
   icon = {
    <div className='flex justify-center items-center w-full h-full'>
      <img 
        src={experience.icon}
        alt={experience.company_name}
        className="w-[60%] h-[60%]"
        objectContain
      
      />
    </div>
   }

   >
    <div>
      <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
      <p className='text-secondary text-[12px] font-semibold' style={{margin: 0}}>{experience.company_name}</p>
    </div>

   <ul className='mt-5 list-disc  ml-5 space-y-2'>
      {experience.points.map((point , key)=>(
        <li key={key}
          className='text-white-100 text-[14px] pl-1 tracking-wider' >
          {point}
        </li>
      )) }
   </ul>

  </VerticalTimelineElement>
)




const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Education</p>
        <h2 className={styles.sectionHeadText}>My Education So far...</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {experiences.map((experience , ind)=>(
                <ExperienceCard key= {ind} experience = {experience}/>
            ))}
          </VerticalTimeline>
      </div>

    </>
  )
}

export default SectionWrapper(Experience , "work")