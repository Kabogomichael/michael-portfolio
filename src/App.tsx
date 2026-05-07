import  { useState } from "react";
import NavBar from "./components/navigation/NavBar";
import { ListMinus, X } from "lucide-react";
import { Button } from "../components/ui/button";
import MobileNavBar from "./components/navigation/MobileNavBar";
import AppRouter from "./components/router/AppRoute";

function App() {
  const [mobileNav, setMobileNav] = useState<boolean>(false);

  return (
    <>
      <div className="relative bg-zinc-950 ">
        <div className="sticky top-0 z-50">
          <NavBar />
        </div>
        <div className="sticky top-0 bg-zinc-950/20 lg:hidden  transition-colors backdrop-blur-2xl z-50 h-15 border-b-2 border-zinc-800">
          <div className=" flex  text-white justify-between pr-4 pt-2 overflow-hidden">

            <h1 className="text-gray-200  ml-4 text-2xl capitalize font-mono">
              {" "}
              <a href="/">
                web <span className="text-primary">dev</span>
              </a>
            </h1>
            <Button onClick={() => setMobileNav((prev) => !prev)}>
              {mobileNav ? <X /> : <ListMinus />}
            </Button>

            {mobileNav && <MobileNavBar setMobileNav={setMobileNav} />}
          </div>
        </div>
        {/* ROUTERS */}
        <AppRouter />
      </div>
    </>
  );
}

export default App;
