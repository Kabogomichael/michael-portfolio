import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { toast } from "sonner";
const FormKey  = import.meta.env.VITE_WEB3FORM_KEY







function Contact() {
   
  //  const [firstName, setFirstName] = useState("")
  //   const [lastName, setLastName] = useState("")
  //   const [email, setEmail] = useState("")
  //   const [message, setMessage] = useState("")
  //  const handleSubmit =(e:React.FormEvent)=>{
  //   e.preventDefault()

  //  }
  

  const [result, setResult] = useState(false);

  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
  
    try {
      setResult(true);
  
      const form = event.currentTarget;
  
      const formData = new FormData(form);
  
      formData.append(
        "access_key",
        FormKey
      );
  
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );
  
      const data = await response.json();
  
      console.log(data);
  
      if (data.success) {
        toast.success(
          "Form Submitted Successfully"
        );
  
        form.reset();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.log(error);
  
      toast.error("Something went wrong");
    } finally {
      setResult(false);
    }
  };
  return (
    <div className="relative">
      
    <main className="bg-zinc-950 md:h-screen  text-zinc-100 flex lg:flex-row flex-col justify-around items-center  md:mx-10  mt-4 md:mt-0 ">
      <section className=" max-w-xl mx-auto ">
        <div className="mx-2">
            <h1 className="md:text-4xl text-2xl capitalize font-bold leading-relaxed">Let’s build something amazing together.</h1>
        <p className="text-zinc-400 leading-relaxed">Have a project idea, freelance opportunity, or collaboration? Feel free to reach out. I’m always open to discussing creative projects and new opportunities.</p>
       
        </div>
      
       <div className="flex flex-col gap-4 mb-10 mt-6">
        <Card className="bg-slate-950 text-white border border-zinc-600 rounded-2xl  ">
          <CardContent className="flex gap-4 items-center">
            <div className=" w-15 h-15 flex justify-center items-center rounded-lg bg-slate-800/80">
              <p > 📧</p>
            </div>
            <div>
              <p className="text-zinc-400">Email</p>
              <h3 className="text-xl">kabogomichael7@gmail.com</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-950 text-white border border-zinc-600 rounded-2xl  ">
          <CardContent className="flex gap-4 items-center">
            <div className=" w-15 h-15 flex justify-center items-center rounded-lg bg-slate-800/80">
              <p> 🌍</p>
            </div>
            <div>
              <p className="text-zinc-400">location</p>
              <h3 className="text-xl">Nairobi, Kenya</h3>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-slate-950 text-white border border-zinc-600 rounded-2xl  ">
          <CardContent className="flex gap-4 items-center">
            <div className=" w-15 h-15 flex justify-center items-center rounded-lg bg-slate-800/80">
              <p> 💼</p>
            </div>
            <div>
              <p className="text-zinc-400">Availability</p>
              <h3 className="text-xl">Open for Freelance & Internships</h3>
            </div>
          </CardContent>
        </Card>
       </div>
      </section>

      {/*CONTACT FORM */}
       
      <section>
        <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
          action=""
          onSubmit={onSubmit}
          className="bg-zinc-900/50 border  border-zinc-700 w-xs md:w-xl lg:w-lg md:p-10 p-4 space-y-4  md:rounded-2xl rounded-lg  "
        >
          <div className="flex gap-2 lg:gap-4 justify-between  ">
            <div className="flex flex-col">
              <label className="capitalize text-zinc-300 ">first name</label>
              <input
                required
                type="text"
                name="first name"
            
                className="border mt-2 border-zinc-700 bg-zinc-800/40 rounded w-full  px-2 py-1"
              />
            </div>
            <div className="flex flex-col">
              <label className="capitalize  text-zinc-300">last name</label>
              <input
                required
                type="text"
                name="last name"
                
                className="border mt-2 border-zinc-700 bg-zinc-800/40 rounded w-full px-2 py-1"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label className="capitalize text-zinc-300 ">email</label>
            <input
           
              required
              type="email"
              name="email"
           
              className="border border-zinc-700 mt-2 bg-zinc-800/40 rounded w-full px-2 py-1"
            />
          </div>
          <div className="flex flex-col">
            <label className="capitalize  text-zinc-300">send message</label>
            <textarea 
            name="message"
              placeholder="enter message"
              className="border border-zinc-700 md:w-xs  bg-zinc-800/40 rounded placeholder:capitalize px-2 py-1 h-50 mt-2  "
            ></textarea>
          </div>
          <Button className="w-full py-5 capitalize" type="submit">
            {result? "sending...":"send message"}
          </Button>
        </motion.form>
      </section>
    </main>
    </div>
  );
}

export default Contact;
