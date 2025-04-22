import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [barsOpen,    setBarsOpen   ] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [accountOpen, setAccountOpen] = useState(false)
  const [scrolled,    setScrolled   ] = useState(false);
  const [spOpen,      setSpOpen     ] = useState(false) // Saved Properties

  const savedProperties = [
    {name:"Avenida Corrientes 348",     img:"/properties/canal1.jpg"     },
    {name:"Avenida del Libertador 1000",img:"/properties/libertador1.jpg"}
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
    <div className='h-12'/>

    {/* MOBILE HEADER */}
    <header className={`fixed top-0 w-full flex justify-between items-center p-3 z-100 duration-300 md:px-10 lg:hidden
                     ${scrolled ? 'bg-white' : 'bg-transparent'}
                     ${scrolled && !barsOpen ? 'border-b border-zinc-200' : 'border-transparent'}`}>
      <Link to="/" className='text-lg'>Keytodream</Link>
      <button onClick={() => setBarsOpen(!barsOpen)} className='fa-solid fa-bars'/>
    </header>

    {/* DESKTOP HEADER */}
    <header className={`hidden lg:fixed top-0 w-full lg:flex px-20 py-1 items-center z-100 duration-300
                     ${scrolled ? 'bg-white border-b border-zinc-200' : 'border-transparent bg-transparent'}`}>
      <div className='w-1/3'>
        <Link to="/" className='py-1 rounded-lg hover:text-zinc-500 duration-300'>Keytodream</Link>
      </div>

      <div className='flex w-1/3 py-1 justify-center whitespace-nowrap'>
        <p onClick={() => {if (accountOpen) setAccountOpen(false); if (spOpen) setSpOpen(false); setContactOpen(!contactOpen)}} 
         className='cursor-pointer py-1 px-2 rounded-lg hover:bg-zinc-100 duration-300'>Contacto</p>
        <p onClick={() => {if (contactOpen) setContactOpen(false); if (accountOpen) setAccountOpen(false); setSpOpen(!spOpen)}} 
         className='cursor-pointer py-1 px-2 rounded-lg hover:bg-zinc-100 duration-300'>Propiedades guardadas</p>
        <p onClick={() => {if (contactOpen) setContactOpen(false); if (spOpen) setSpOpen(false); setAccountOpen(!accountOpen)}} 
         className='cursor-pointer py-1 px-2 rounded-lg hover:bg-zinc-100 duration-300'>Mi cuenta</p>
        {/* contacto */}
        <AnimatePresence>
          {contactOpen && (
            <motion.div className='origin-top-left absolute top-12 flex flex-col gap-3 border bg-white border-zinc-100 rounded-lg  w-[380px] p-3 overflow-hidden shadow-xl'
                          initial={{scaleY:0,scaleX:0, clipPath:'circle(0%   at 0% 0%)'}}
                          animate={{scaleY:1,scaleX:1, clipPath:'circle(150% at 0% 0%)'}}
                             exit={{scaleY:0,scaleX:0, clipPath:'circle(0%   at 0% 0%)'}}
                       transition={{duration:0.5}}>
              <p>Telefono: 11 2345 6789</p>
              <p>Correo: keytodream@realestate.com</p>
              <p>Atendemos de lunes a viernes de 9:00 a 18:00</p>
            </motion.div>
          )}
        </AnimatePresence>
        {/* propiedades guardadas */}
        <AnimatePresence>
          {spOpen && (
            <motion.div className='origin-top absolute top-12 flex flex-col gap-3 border bg-white border-zinc-100 rounded-lg shadow-xl p-3 overflow-hidden  w-[380px]'
                          initial={{scaleY:0,scaleX:0, clipPath:'circle(0%   at 50% 0%)'}}
                          animate={{scaleY:1,scaleX:1, clipPath:'circle(150% at 50% 0%)'}}
                             exit={{scaleY:0,scaleX:0, clipPath:'circle(0%   at 50% 0%)'}}
                       transition={{duration:0.5}}>
              <div className='max-h-[400px] overflow-y-auto flex flex-col gap-2'>
              {savedProperties.map((property, index) => (
                  <article className='flex gap-1 justify-between items-center w-full'>
                    <p className='w-8/10'>{property.name}</p>
                    <img className='w-2/10 rounded-lg' src={property.img} />
                  </article>
              ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* mi cuenta */}
        <AnimatePresence>
          {accountOpen && (
            <motion.div className='origin-top-right absolute top-12 flex flex-col gap-3 border bg-white border-zinc-100 rounded-lg shadow-xl p-3 overflow-hidden  w-[380px]'
            initial={{scaleY:0,scaleX:0, clipPath:'circle(0%   at 100% 0%)'}}
            animate={{scaleY:1,scaleX:1, clipPath:'circle(150% at 100% 0%)'}}
               exit={{scaleY:0,scaleX:0, clipPath:'circle(0%   at 100% 0%)'}}
         transition={{duration:0.5}}>
              <p>Nombre: </p>
              <p>DNI: </p>
              <p>Correo: </p>
              <p>Telefono: </p>
              <div className='w-full justify-center flex gap-3'>
                <button className='bg-zinc-100 py-1 px-2 rounded-lg'>Publicar</button>
                <button className='bg-black py-1 px-2 rounded-lg text-white'>Cerrar sesión</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <div className='flex gap-3 ml-auto w-1/3 justify-end'>
        <Link to="/login" className=' py-1 px-2 text-center rounded-lg hover:bg-zinc-100 duration-300'>Iniciar Sesion</Link>
        <Link to="/register" className='bg-black text-white py-1 px-2 text-center rounded-lg hover:bg-black/80 duration-300 shadow-xl'>Registrarse</Link>
      </div>
    </header>

    {/* MOBILE MENU */}
    <AnimatePresence initial={false}>
          {barsOpen && (
            <motion.div className='origin-top-right fixed flex flex-col top-0 p-5 pt-14 left-0 w-full z-20 bg-white shadow-xl border-b border-zinc-300 md:px-10'
                        initial={{scaleY:0,scaleX:0, clipPath:'circle(0%   at 100% 0%)'}}
                        animate={{scaleY:1,scaleX:1, clipPath:'circle(150% at 100% 0%)'}}
                           exit={{scaleY:0,scaleX:0, clipPath:'circle(0%   at 100% 0%)'}}
                           transition={{duration:0.5}}>
              <Link to="/login" className='border-zinc-200 border-1 py-1 bg-zinc-100 rounded-lg text-center'>Iniciar Sesion</Link>
              <Link to="/register" className='mt-3 border-zinc-900 border-1 py-1 bg-black text-white text-center mb-2 rounded-lg'>
                Registrarse
              </Link>

              <p onClick={() => {if (accountOpen) setAccountOpen(false); if (spOpen) setSpOpen(false); setContactOpen(!contactOpen)}} className='mt-3'>Contacto</p>

              {/* contacto */}
              <AnimatePresence>
                {contactOpen && (
                  <motion.div className='flex flex-col gap-3 overflow-hidden'
                      initial={{height:0     }}
                      animate={{height:'auto'}}
                         exit={{height:0     }}>
                    <span className='mt-3 pt-[1px] bg-zinc-200'/>
                    <p>Telefono: 11 2345 6789</p>
                    <p>Correo: keytodream@realestate.com</p>
                    <p>Atendemos de lunes a viernes de 9:00 a 18:00</p>
                  </motion.div>
                )}
              </AnimatePresence>

              <span className='mt-3 pt-[1px] bg-zinc-200'></span>
              <p onClick={() => {if (contactOpen) setContactOpen(false); if (spOpen) setSpOpen(false); setAccountOpen(!accountOpen)}} className='mt-3'>Mi cuenta</p>

              {/* mi cuenta */}
              <AnimatePresence>
                {accountOpen && (
                  <motion.div className='flex flex-col gap-3 overflow-hidden'
                      initial={{height:0     }}
                      animate={{height:'auto'}}
                         exit={{height:0     }}>
                    <span className='mt-3 pt-[1px] bg-zinc-200'/>
                    <p>Nombre: </p>
                    <p>DNI: </p>
                    <p>Correo: </p>
                    <p>Telefono: </p>
                    <div className='w-full items-center flex flex-col gap-3'>
                      <button className='bg-zinc-100 py-1 px-2 rounded-lg border border-zinc-200 w-8/10'>Publicar una propiedad</button>
                      <button className='bg-black py-1 px-2 rounded-lg text-white w-8/10'>Cerrar sesión</button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <span className='mt-3 pt-[1px] bg-zinc-200'></span>
              <p onClick={() => {if (contactOpen) setContactOpen(false); if (accountOpen) setAccountOpen(false); setSpOpen(!spOpen)}} className='mt-3'>Propiedades guardadas</p>

              {/* propiedades guardadas */}
              <AnimatePresence>
                {spOpen && (
                  <motion.div className='flex flex-col gap-3 overflow-hidden'
                      initial={{height:0     }}
                      animate={{height:'auto'}}
                         exit={{height:0     }}>
                    <span className='mt-3 pt-[1px] bg-zinc-200'/>
                    <div className='max-h-[300px] overflow-y-auto flex flex-col gap-2'>
                    {savedProperties.map((property, index) => (
                      
                        <article className='flex gap-1 justify-between items-center'>
                          <p className='w-8/10'>{property.name}</p>
                          <img className='w-2/10 rounded-lg' src={property.img} />
                        </article>
                    ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>


            </motion.div>
            )}
          </AnimatePresence>
    </>
  )
}

export default Header