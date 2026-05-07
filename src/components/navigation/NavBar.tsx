import React from "react";
import { Button } from "../../../components/ui/button";
import { motion } from "framer-motion";
import { Links } from "../router/navRoute";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function NavBar() {
  // const Link = [{}]
  const { pathname } = useLocation();

  return (
    <div className=" hidden lg:block transition-colors backdrop-blur-xl  scroll-smooth">
      <nav className=" text-white  border-b-2 flex justify-between items-center border-gray-700 h-20  px-10">
        <Link to={"/"}>
          <h1 className="text-gray-200  text-2xl capitalize font-mono">
            web <span className="text-primary">dev</span>
          </h1>
        </Link>
        <div className="flex items-center justify-end ">
          {Links.map((nav, i) => (
            <motion.a
              initial={{ opacity: 0, x: 0 }}
              animate={{ opacity: 1, x: 10 }}
              transition={{ delay: i * 0.09 }}
              href={nav.link}
              key={i}
              className={`flex m-10 capitalize hover:text-primary  pb-1 ${
                pathname == nav.link
                  ? "text-primary hover:border-b-2 border-primary"
                  : ""
              }`}
            >
              {nav.text}
            </motion.a>
          ))}
          <a href={"/contact"}>
            <h1 className="w-30 h-10 capitalize flex justify-center items-center cursor-pointer  rounded-md bg-primary   hover:border hover:bg-zinc-800 hover:border-zinc-400 text-center gap-2">
              Hire me <ArrowUpRight className="w-6 "/>
            </h1>
          </a>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
