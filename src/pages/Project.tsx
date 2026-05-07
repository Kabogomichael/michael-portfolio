import React from 'react'
import GetAllProjects from '../components/projects/GetAllProjects'
import { Card, CardContent } from "../../components/ui/card";
import { Link } from 'react-router-dom'
import { Projects } from '../data/data'
import { motion } from 'framer-motion'
import { Button } from '../../components/ui/button';
import { ArrowRight } from 'lucide-react';

function Project() {
  const links  = [{id:1,link:"/project/all",text:"all"},{id:1,link:"/project/react",text:"react"}]
  return (
    <section className="mt-10 max-w-6xl mx-auto text-white">
    <h2 className="text-2xl font-semibold mb-4 mx-6">Featured Projects</h2>
    <div className='flex flex-col md:flex-row justify-between gap-4 mb-10 mx-6'>
      <p className='text-sm text-zinc-400 max-w-xl'>Here are some projects that showcase my frontend skills, animations, responsiveness, and modern UI design.</p>
      <h1 className='border px-4 py-2 rounded-md border-zinc-400 cursor-pointer hover:bg-zinc-200 hover:text-zinc-900 w-40'>View all projects</h1>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-2xs ">
      {Projects.map((project) => (
        <motion.div
          key={project.name}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="w-full "
        >
          <Card className=" p-0 bg-zinc-900 border-zinc-800  max-w-screen mx-auto md:w-80 h-110 ">
            <CardContent className="p-0  ">
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-40 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-zinc-200 capitalize">
                  {project.name}
                </h3>
                <p className="text-zinc-500 mt-2 ">{project.desc}</p>

                {/* technology */}

                <p className="text-sm font-semibold text-zinc-200   my-2 capitalize">
                  technology
                </p>
                <div className="flex gap-2">
                  {project.technology.map((tech) => (
                    <Button className="border border-zinc-800 bg-transparent hover:bg-zinc-800/90" key={tech.id}>
                      {tech.name}
                    </Button>
                  ))}
                </div>

               
                  
                    <div className="mt-4 flex justify-around ">

                     <Link to={project.github}  className="">
                      <Button variant={"default"} className=" w-40 capitalize hover:border-2 hover:border-slate-400 cursor-pointer">
                        git hub
                      </Button>
                      </Link>
                      <Link to={project.live_View} className="text-zinc-400 hover:text-zinc-100 flex capitalize justify-center items-center gap-1" >
                    
                       view project <ArrowRight className="h-5 w-5" />
                      
                      </Link>
                    </div>
                
                </div>
              
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  </section>
  )
}

export default Project