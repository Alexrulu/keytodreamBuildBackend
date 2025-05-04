import ModelHouse from "../components/ModelHouse"
import { Link } from "react-router-dom"
import { motion } from 'motion/react'

const Hero = () => {
  return(
    <>

      {/* MOBILE HERO */}
      <div className="relative h-[95vh] mb-[5vh] lg:hidden">
        <motion.div className="absolute z-10 h-2/3 top-[-10vh] w-full md:h-[900px] lg:hidden"
                     initial={{ opacity: 0 }}
                     animate={{ opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}>
          <ModelHouse />
        </motion.div>
    
        <div className="flex flex-col justify-center w-full absolute bottom-[10vh] h-1/2 gap-10 lg:hidden">
    
          <div className="w-full flex flex-col gap-5 items-center justify-center p-5">
            <h1 className="text-[3em] text-center leading-tight font-bold">Encuentra tu hogar ideal</h1>
            <h2 className="text-center text-[1.5em] text-zinc-700">Más de 10,000 propiedades a tu alcance.</h2>
          </div>
  
          <div className="flex flex-col items-center justify-center gap-5 translate-y-[-2vh]">
            <div className="flex items-center justify-between w-60 gap-5">
              <Link to="/alquilar" className="text-center bg-black text-white py-1 w-full px-2 ">Alquilar</Link>
              <Link to="/comprar" className="text-center py-1 px-2 bg-zinc-100 w-full ">Comprar</Link>
            </div>
            <div className="flex items-center justify-center w-60 bg-white mx-auto shadow-inner border border-zinc-200 py-1">
              <input type="search" placeholder="Explorar..." className="outline-none" />
              <i className="fa-solid fa-magnifying-glass text-zinc-500"/>
            </div>
          </div>

        </div>

      </div>

      {/* DESKTOP HERO */}
      <div className="hidden lg:flex h-[96vh] w-full mb-[10vh] overflow-hidden">
      
        <div className="z-10 flex flex-col justify-center h-full gap-6 w-2/5 pl-20">
          <h1 className="text-6xl font-bold leading-tight">Encuentra<br />tu hogar ideal</h1>
          <h2 className="text-lg text-zinc-700">Más de 10,000 propiedades a tu alcance.</h2>
          <div className="flex gap-3">
            <Link to="/alquilar" className="bg-black text-white px-4 py-2  shadow-xl hover:bg-zinc-800 duration-300">Alquilar</Link>
            <Link to="/comprar" className="px-4 py-2  hover:bg-zinc-200 duration-300">Comprar</Link>
          </div>
          <div className="flex items-center bg-white border border-zinc-200 w-[30vw]  px-4 py-2 shadow-inner duration-300">
            <input type="text" placeholder="Explorar..." className="outline-none w-full text-sm" />
            <i className="fa-solid fa-magnifying-glass text-zinc-500 ml-2" />
          </div>
        </div>

        <motion.div className="w-3/5 h-full translate-y-[-10px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
     transition={{ delay: 1, duration: 1 }}>
          <ModelHouse />
        </motion.div>
      
      </div>


        
    </>
  )
}
export default Hero