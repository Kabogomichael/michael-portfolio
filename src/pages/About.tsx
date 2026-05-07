import { motion } from "framer-motion";
import { Card, CardContent } from "../../components/ui/card";
function About() {
  return (

    <div className="bg-zinc-950 ml-0 md:h-screen pb-10 md:pb-0 ">
      <h1 className="text-4xl text-white font-bold text-center my-10">About me</h1>
      <div className=" text-zinc-200  flex flex-col justify-around items-center md:flex-row ">
      <div className="max-w-3xl  ">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-3xl mb-6 ml-10"
        >
          I create modern web experiences.
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, x: 0 }}
          animate={{ opacity: 1, x: 20 }}
          transition={{ duration: 1 }}
          className=" "
        >
          <p className="text-zinc-400  leading-relaxed ">
            I’m a passionate frontend developer focused on building modern,
            fast, and scalable web applications using React, Next.js, and
            Tailwind CSS.
          </p>

          <p className="text-zinc-400  leading-relaxed mt-4">
            I enjoy turning ideas into real-world products and continuously
            improving my skills through hands-on projects and collaboration.
          </p>
        </motion.div>
      </div>
      <div>
<div className="bg-zinc-800 w-xm  md:w-lg grid  grid-cols-1 md:grid-cols-2 p-10 gap-4 rounded-2xl border border-zinc-500 mt-10 md:mt-0">
  <Card className="w-50 h-30 bg-zinc-950 text-zinc-100  ">
    <CardContent className="flex flex-col justify-center "  >
      <h1 className="text-4xl font-bold">3+</h1>
      <p className="text-zinc-400">Years learning and building</p>
    </CardContent>
  </Card>
  <Card className="w-50 h-30 bg-zinc-950 text-zinc-100 flex flex-col justify-center">
    <CardContent>
      <h1 className="text-4xl font-bold">5+</h1>
      <p className="text-zinc-400">projects competed</p>
    </CardContent>
  </Card>
  <Card className="w-50 h-30 bg-zinc-950 text-zinc-100 flex flex-col justify-center">
    <CardContent>
      <h1 className="text-4xl font-bold">100%</h1>
      <p className="text-zinc-400">responsive design</p>
    </CardContent>
  </Card>
  <Card className="w-50 h-30 bg-zinc-950 text-zinc-100 flex flex-col justify-center">
    <CardContent >
      <h1 className="text-4xl font-bold">24/7</h1>
      <p className="text-zinc-400">passion of coding</p>
    </CardContent>
  </Card>
</div>
</div>
</div>
    </div>
  );
}

export default About;
