import { AnimatePresence, motion } from 'motion/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Filtros = () => {

  const [isOpen, setIsOpen] = useState(false)

  return(
    <>
      <div className="px-3 w-full flex flex-col gap-3 md:px-10 lg:px-20">

        <div className='flex flex-col gap-3 lg:py-1 lg:grid lg:grid-cols-3'>
          <div className="w-full px-3 py-1 bg-zinc-100 rounded-lg flex items-center justify-between lg:col-span-2 lg:order-2">
            <input type="search" placeholder="Buscar..." className="outline-none w-full" />
            <i className="fa-solid fa-magnifying-glass text-zinc-500"/>
          </div>
  
          <div className="flex items-center justify-between lg:gap-3 lg:col-start-1 lg:col-span-1">
            <span onClick={() => setIsOpen(!isOpen)}>Filtros<i className="fa-solid fa-angle-down ml-2"/></span>
            <Link to="/map" className="bg-zinc-100 rounded-lg py-1 px-2">Ver mapa</Link>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div className='absolute z-10 w-full top-33 left-0 px-5 pb-5 flex flex-col gap-3 text-zinc-700 origin-top-left
                      bg-white border-b border-zinc-300 shadow-xl md:px-10 lg:left-20 lg:w-1/3 lg:rounded-lg lg:border-zinc-100 lg:border lg:top-25'
                          initial={{scaleY:0,scaleX:0, clipPath:'circle(0%   at 0% 0%)'}}
                          animate={{scaleY:1,scaleX:1, clipPath:'circle(150% at 0% 0%)'}}
                             exit={{scaleY:0,scaleX:0, clipPath:'circle(0%   at 0% 0%)'}}
                       transition={{duration:0.5}}>

              <div className='flex gap-2 justify-around mt-2 border border-zinc-200 rounded-lg py-1'>
                <Link to="/alquilar">Alquilar</Link>
                <Link to="/comprar">Comprar</Link>
              </div>
  
              <p>Baños</p>
              <span className='flex w-full justify-between px-5 border-b-1 border-zinc-100'>
                <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p>
                </span>
  
              <p>Dormitorios</p>
              <span className='flex w-full justify-between px-5 border-b-1 border-zinc-100'>
                <p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p>
                </span>
  
              <p>Metros cuadrados</p>
              <span className='flex w-full px-5 border-b-1 border-zinc-100'>
                <input type='text' placeholder='Desde' className='w-1/2 outline-none'/>
                <input type='text' placeholder='Hasta' className='w-1/2 outline-none'/>
              </span>
  
              <p>Fecha de publicacion</p>
              <span className='flex w-full px-5 border-b-1 border-zinc-100 text-zinc-400'>
                <p type='text' className='w-1/2 outline-none'>Más reciente</p>
                <p type='text' className='w-1/2 outline-none'>Más antiguo</p>
              </span>
              <p>Precio</p>
              <span className='flex w-full px-5 border-b-1 border-zinc-100 text-zinc-400'>
                <p type='text' className='w-1/2 outline-none'>Más economico</p>
                <p type='text' className='w-1/2 outline-none'>Más costoso</p>
              </span>
  
            </motion.div>
          )}
        </AnimatePresence>
        
      </div>
    </>
  )
}

export default Filtros