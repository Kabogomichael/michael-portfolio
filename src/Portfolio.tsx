"use client";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Download,ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Projects, Skills } from "../src/data/data";
import heroImage from "../src/assets/portfolio.png";
import Footer from "./components/Footer";
import { Link } from "react-router-dom";

const name = "Michael";

export default function Portfolio() {
  return (
    <div className="min-h-screen overflow-hidden   text-white px-2 md:px-6 pt-10 max-w-screen  mx-auto">
      {/* HERO */}
      <section className="text-center md:ml-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="max-w-2xl  mx-auto ">
            <motion.h1
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl  font-bold"
            >
              Hi, I’m {name} 👋
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-zinc-400 md:w-150 mx-auto mt-4 text-lg"
            >
              Frontend Developer building modern web apps with React, Next.js &
              Supabase.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-center gap-4 mt-6"
            >
             
              <Button variant={"outline"}  className=" text-zinc-300 hover:text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border-zinc-500  capitalize  h-11"><Download  className="w-10 h-10"/>Download CV</Button>

            </motion.div>
          </div>
          <div className="  relative w-2xl mx-auto">
            <div className=" bg-linear-to-br from-gray-400/20  to-gray-800/20 w-screen h-70 md:h-120 md:w-120  rounded-full  rounded-bl-2xl blur-3xl animate-pulse  duration-1000 flex justify-end "></div>
            <div className="flex justify-center items-center">
              <img
                src={heroImage}
                alt="hero image"
                className="absolute z-5 top-0 md:left-15 rounded-r-full  left-10 w-68 h-68 md:w-130  md:h-130 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto mt-24  ">
        <Card className="bg-zinc-900 border-zinc-800">
          <CardContent className="p-6">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-semibold text-primary"
            >
              About Me
            </motion.h2>
            <p className="text-zinc-400 mt-2">
              I’m a frontend developer focused on building fast, scalable, and
              beautiful web applications. I enjoy turning ideas into real-world
              products using modern tools.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* SKILLS */}
      <section className="max-w-4xl mx-auto mt-10">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Skills.map((skill, i) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0}}
              viewport={{ once: true}}
              transition={{ delay: i * 0.05 }}
            >
              <Card
                className={`bg-zinc-900 border-zinc-800 ${
                  skill == "Tailwind" || skill == "Prisma" || skill == "Next.js"
                    ? "bg-primary"
                    : ""
                } ${
                  skill == "TypeScript" || skill == "Supabase" || skill == "Git"
                    ? "bg-linear-to-br from-blue-700  via-blue-500 to-blue-600"
                    : ""
                }`}
              >
                <CardContent className="p-4 text-center text-zinc-300">
                  {skill}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="mt-10 max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>

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

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
