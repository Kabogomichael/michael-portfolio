import React from "react";
import { X } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Links } from "../router/navRoute";
import { motion } from "framer-motion";
import {  Link, useLocation,useNavigate } from "react-router-dom";

type Prop = {
  setMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
};

function MobileNavBar({ setMobileNav }: Prop) {
    const {pathname} = useLocation()
    const navigate = useNavigate()
  return (
    <motion.div
      initial={{ opacity: 0, y: 1 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className=" absolute z-10  bg-zinc-950/98 transition-colors backdrop-blur-3xl w-screen  h-screen"
    >
      <div></div>

      <nav className=" text-white w-screen  ">
        <div className="flex justify-end mr-4">
          <Button onClick={() => setMobileNav(false)}>
            <X />
          </Button>
        </div>

        <div>
          <ul className="flex flex-col  ">
            {Links.map((nav) => (
              <Link
                to={nav.link}
                key={nav.link}
                className=" hover:bg-zinc-800/80   py-4 rounded-lg m-2 "
              >
                <li className={` text-gray-200 text-lg  capitalize ml-10 hover:text-primary ${pathname == nav.link? "text-primary ":""}`}>
                  {nav.text}
                </li>
              </Link>
            ))}
          </ul>
          <Link to={"/contact"}>  <Button className="min-w-screen mx-auto py-6 bg-linear-to-tr bg-transparent  hover:bg-green-700 border border-green-600 hover:border-0 text-xl" onClick={()=> navigate("/contact")}>
            Hire
          </Button>
          </Link>
        
        </div>
      </nav>
    </motion.div>
  );
}

export default MobileNavBar;
