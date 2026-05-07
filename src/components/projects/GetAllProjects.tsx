import { Card,CardContent } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Projects, Skills } from "../../data/data";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ReactProject from "./ReactProject";
function GetAllProjects() {
  return (
    <div>
        {/* PROJECTS */}
      <section className="mt-10 max-w-6xl mx-auto">

        <motion.div initial={{opacity:0,y:0}} animate={{opacity:1,y:10}} transition={{duration:1}} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 min-w-2xs ">
          {Projects.map((project) => (
            <motion.div
              key={project.name}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="w-full "
            >
              <Card className=" p-0 bg-zinc-900 border-zinc-800  max-w-screen mx-auto md:w-80 h-110  ">
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

                   
                      
                        <div className="mt-4 ">

                         <Link to={project.github}  className="">
                          <Button variant={"default"} className="w-1/2 capitalize hover:border-2 hover:border-slate-400 cursor-pointer">
                            git hub
                          </Button>
                          </Link>
                          <Link to={project.live_View} >
                          <Button   className="w-1/2 bg-zinc-700 capitalize hover:border-2 hover:border-slate-400 cursor-pointer">
                            view project
                          </Button>
                          </Link>
                        </div>
                    
                    </div>
                  
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </section>
      <ReactProject />
    </div>
  )
}

export default GetAllProjects