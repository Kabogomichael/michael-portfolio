
import { CloudLightning } from 'lucide-react'
import { Skills } from '../data/data'
import { motion } from 'framer-motion'


function SkillsPage() {
  return (
    <div className='bg-zinc-950    text-zinc-100 mt-10 mx-2 pb-20'>

      <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.9}} className='capitalize text-4xl font-bold text-center'>technologies i use</motion.h1>
      <motion.p initial={{opacity:0,x:0}} animate={{opacity:1,x:20}} transition={{duration:2}} className='leading-relaxed text-zinc-400 text-center text-sm'>I enjoy working with modern frontend tools and continuously improving my development workflow.</motion.p>
      <div className='grid  grid-cols-1 md:grid-cols-3 max-w-50  md:max-w-2xl gap-6 mx-auto mt-5 '>
        {Skills.map((skill,i)=><motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:10}} transition={{delay:i*0.2,duration:0.9}}  key={i} className='w-50 h-40 bg-zinc-800/40 hover:border hover:border-blue-600 rounded-xl p-8 hover:scale-105 duration-300 transition-all'>
          <div className=' p-2 w-15 h-15 flex justify-center items-center rounded-xl bg-zinc-700/40 mb-1'>
            <CloudLightning className='text-yellow-400' />
            </div>
          
          <h1>{skill}</h1>
          </motion.div>)}
      </div>
      
    </div>
    

  )
}

export default SkillsPage