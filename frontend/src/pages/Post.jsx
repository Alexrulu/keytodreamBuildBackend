import { motion, AnimatePresence } from 'motion/react'
import { useState } from 'react'

const Post = () => {

  const [post1, setPost1] = useState(true)
  const [post2, setPost2] = useState(false)
  const [post3, setPost3] = useState(false)
  const [post4, setPost4] = useState(false)
  const [direction, setDirection] = useState(0)

  const [step2active, setStep2active] = useState(false)
  const [step3active, setStep3active] = useState(false)
  const [step4active, setStep4active] = useState(false)

  const [ambientes,   setAmbientes  ] = useState(false)
  const [baños,       setBaños      ] = useState(false)
  const [coches,      setCoches     ] = useState(false)
  const [dormitorios, setDormitorios] = useState(false)

  return (
    <>
    <div className='overflow-hidden'>
      {/*Progreso*/}
      <motion.div className='flex p-3 justify-between items-center md:px-10'>
        <div className='flex flex-col justify-center items-center gap-2 w-1/7'>
          <p className='flex bg-black w-10 h-10 text-white justify-center items-center'>1</p>
          <p className='text-sm'>Datos</p>
        </div>

        <motion.span className='h-[1px] bg-black w-1/7 translate-y-[-14px]'
                       initial={{clipPath:'inset(0 100% 0 0)'                          }}
                       animate={post2 || post3 || post4 ? {clipPath:'inset(0 0 0 0)'}:{}}
                    transition={{duration:0.5, ease:'easeInOut'                        }}
           onAnimationComplete={() => setStep2active(!step2active)                      }/>
        <motion.div className='flex flex-col justify-center items-center gap-2 w-1/7'
                      animate={step2active ? {scale:[1, 1.1, 1]}:{}}
                   transition={{duration:0.5                        }}>
          <p className={`flex w-10 h-10 text-white justify-center items-center duration-300 ${step2active ? 'bg-black' : 'bg-zinc-500'}`}>2</p>
          <p className={`text-sm duration-300 ${step2active ? 'text-black' : 'text-zinc-500'}`}>Imagen</p>
        </motion.div>

        <motion.span className='h-[1px] bg-black w-1/7 translate-y-[-14px]'
                       initial={{clipPath:'inset(0 100% 0 0)'                 }}
                       animate={post3 || post4 ? {clipPath:'inset(0 0 0 0)'}:{}}
                    transition={{duration:0.5, ease:'easeInOut'               }}
           onAnimationComplete={() => setStep3active(!step3active)             }/>
        <motion.div className='flex flex-col justify-center items-center gap-2 w-1/7'
                      animate={step3active ? {scale:[1, 1.1, 1]}:{}}
                   transition={{duration:0.5                      }}>
          <p className={`flex w-10 h-10 text-white justify-center items-center duration-300 ${step3active ? 'bg-black' : 'bg-zinc-500'}`}>3</p>
          <p className={`text-sm duration-300 ${step3active ? 'text-black' : 'text-zinc-500'}`}>Contacto</p>
        </motion.div>

        <motion.span className='h-[1px] bg-black w-1/7 translate-y-[-14px]'
                       initial={{clipPath:'inset(0 100% 0 0)'        }}
                       animate={post4 ? {clipPath:'inset(0 0 0 0)'}:{}}
                    transition={{duration:0.5, ease:'easeInOut'      }}
           onAnimationComplete={() => setStep4active(!step4active)    }/>
        <motion.div className='flex flex-col justify-center items-center gap-2 w-1/7'
                      animate={step4active ? {scale:[1, 1.1, 1]}:{}}
                   transition={{duration:0.5                      }}>
          <p className={`flex w-10 h-10 text-white justify-center items-center duration-300 ${step4active ? 'bg-black' : 'bg-zinc-500'}`}>4</p>
          <p className={`text-sm duration-300 ${step4active ? 'text-black' : 'text-zinc-500'}`}>Precio</p>
        </motion.div>
      </motion.div>


      {/*Post 1 (DATOS)*/}
      {post1 && (
        <motion.div className={`p-3 flex flex-col gap-5 md:px-10 md:w-4/5 lg:px-20 xl:w-4/6 2xl:w-4/7`}
        initial={{x: direction === 1 ? -100 : 100, opacity:0}}
        animate={{x:0   , opacity:1 }}
        transition={{duration:1,type:'spring'  }}>
          <button onClick={() => {setDirection(1) ;setPost2(true); setPost1(false)}} 
                className='flex justify-end bg-black text-white py-1 px-2 ml-auto active:translate-y-1 duration-100 cursor-pointer'>Continuar</button>
          <div className='flex justify-around w-full bg-zinc-100 py-1'>
            <p>Venta</p>
            <p>Alquiler</p>
          </div>
          <div className='flex justify-around w-full bg-zinc-100 py-1'>
            <p>Casa</p>
            <p>Departamento</p>
            <p>PH</p>
            <p>Condominio</p>
          </div>
          <div className='flex flex-col gap-3 md:w-3/4'>
            <p>Ubicación</p>
            <input type="text" className='outline-none border-b border-zinc-300' placeholder='Ingresá la dirección' />
            <input type="text" className='outline-none border-b border-zinc-300' placeholder='Ingresá la ciudad' />
          </div>
          <div className='flex flex-col gap-3 text-left'>
            <p>Características</p>
            <input type="text" className='outline-none border-b border-zinc-300 md:w-3/4' placeholder='Metros cuadrados' />
            
            <div className='flex flex-col gap-3 lg:flex-row lg:gap-20'>
              <div className='flex justify-between items-center overflow-hidden lg:items-start lg:gap-2 lg:relative lg:h-60 lg:pr-[10px]'>
                <p onClick={() => setAmbientes(!ambientes)} className='py-1 active:translate-y-1 duration-100 cursor-pointer'>Ambientes <i className='fa-solid fa-angle-right text-sm lg:absolute lg:pointer-events-none lg:opacity-0'/>
                                               <i className='absolute pointer-events-none opacity-0 fa-solid fa-angle-down text-sm lg:relative lg:opacity-100 lg:pointer-events-auto'/></p>
                <AnimatePresence mode='wait'>
                  {ambientes && (
                    <>{/* mobile*/}
                      <motion.span className='flex md:-translate-x-50 lg:hidden'
                                     initial={{x:100,opacity:0}}
                                     animate={{x:0,  opacity:1}}
                                        exit={{x:100,opacity:0}}
                                  transition={{duration:0.5   }}>
                        <p className='bg-zinc-200 py-1 px-3'>1</p>
                        <p className='bg-zinc-200 py-1 px-3'>2</p>
                        <p className='bg-zinc-200 py-1 px-3'>3</p>
                        <p className='bg-zinc-200 py-1 px-3'>4</p>
                        <p className='bg-zinc-200 py-1 px-3'>5</p>
                        <p className='bg-zinc-200 py-1 px-3'>6</p>
                      </motion.span>
                      {/* desktop */}
                      <motion.span className='hidden lg:flex flex-col absolute right-0 top-8'
                                     initial={{y:100,opacity:0}}
                                     animate={{y:0,  opacity:1}}
                                        exit={{y:100,opacity:0}}
                                  transition={{duration:0.5   }}>
                        <p className='bg-zinc-200 py-1 px-3'>1</p>
                        <p className='bg-zinc-200 py-1 px-3'>2</p>
                        <p className='bg-zinc-200 py-1 px-3'>3</p>
                        <p className='bg-zinc-200 py-1 px-3'>4</p>
                        <p className='bg-zinc-200 py-1 px-3'>5</p>
                        <p className='bg-zinc-200 py-1 px-3'>6</p>
                      </motion.span>
                    </>
                  )}
                </AnimatePresence>
              </div>
              
              <div className='flex justify-between items-center overflow-hidden lg:items-start lg:gap-2 lg:relative lg:h-60 lg:pr-[10px]'>
                <p onClick={() => setBaños(!baños)} className='py-1 active:translate-y-1 duration-100 cursor-pointer'>Baños <i className='fa-solid fa-angle-right text-sm lg:absolute lg:pointer-events-none lg:opacity-0'/>
                               <i className='absolute pointer-events-none opacity-0 fa-solid fa-angle-down text-sm lg:relative lg:opacity-100 lg:pointer-events-auto'/></p>
                <AnimatePresence mode='wait'>
                  {baños && (
                    <>{/* mobile*/}
                      <motion.span className='flex md:-translate-x-50 lg:hidden'
                                     initial={{x:100,opacity:0}}
                                     animate={{x:0,  opacity:1}}
                                        exit={{x:100,opacity:0}}
                                  transition={{duration:0.5   }}>
                        <p className='bg-zinc-200 py-1 px-3'>1</p>
                        <p className='bg-zinc-200 py-1 px-3'>2</p>
                        <p className='bg-zinc-200 py-1 px-3'>3</p>
                        <p className='bg-zinc-200 py-1 px-3'>4</p>
                        <p className='bg-zinc-200 py-1 px-3'>5</p>
                        <p className='bg-zinc-200 py-1 px-3'>6</p>
                      </motion.span>
                      {/* desktop */}
                      <motion.span className='hidden lg:flex flex-col absolute right-0 top-8'
                                     initial={{y:100,opacity:0}}
                                     animate={{y:0,  opacity:1}}
                                        exit={{y:100,opacity:0}}
                                  transition={{duration:0.5   }}>
                        <p className='bg-zinc-200 py-1 px-3'>1</p>
                        <p className='bg-zinc-200 py-1 px-3'>2</p>
                        <p className='bg-zinc-200 py-1 px-3'>3</p>
                        <p className='bg-zinc-200 py-1 px-3'>4</p>
                        <p className='bg-zinc-200 py-1 px-3'>5</p>
                        <p className='bg-zinc-200 py-1 px-3'>6</p>
                      </motion.span>
                    </>
                  )}
                </AnimatePresence>
              </div>
              
              <div className='flex justify-between items-center overflow-hidden lg:items-start lg:gap-2 lg:relative lg:h-60 lg:pr-[10px]'>
                <p onClick={() => setCoches(!coches)} className='py-1 active:translate-y-1 duration-100 cursor-pointer'>Coches <i className='fa-solid fa-angle-right text-sm lg:absolute lg:pointer-events-none lg:opacity-0'/>
                                  <i className='absolute pointer-events-none opacity-0 fa-solid fa-angle-down text-sm lg:relative lg:opacity-100 lg:pointer-events-auto'/></p>
                <AnimatePresence mode='wait'>
                  {coches && (
                    <>{/* mobile*/}
                      <motion.span className='flex md:-translate-x-50 lg:hidden'
                                     initial={{x:100,opacity:0}}
                                     animate={{x:0,  opacity:1}}
                                        exit={{x:100,opacity:0}}
                                  transition={{duration:0.5   }}>
                        <p className='bg-zinc-200 py-1 px-3'>1</p>
                        <p className='bg-zinc-200 py-1 px-3'>2</p>
                        <p className='bg-zinc-200 py-1 px-3'>3</p>
                        <p className='bg-zinc-200 py-1 px-3'>4</p>
                        <p className='bg-zinc-200 py-1 px-3'>5</p>
                        <p className='bg-zinc-200 py-1 px-3'>6</p>
                      </motion.span>
                      {/* desktop */}
                      <motion.span className='hidden lg:flex flex-col absolute right-0 top-8'
                                     initial={{y:100,opacity:0}}
                                     animate={{y:0,  opacity:1}}
                                        exit={{y:100,opacity:0}}
                                  transition={{duration:0.5   }}>
                        <p className='bg-zinc-200 py-1 px-3'>1</p>
                        <p className='bg-zinc-200 py-1 px-3'>2</p>
                        <p className='bg-zinc-200 py-1 px-3'>3</p>
                        <p className='bg-zinc-200 py-1 px-3'>4</p>
                        <p className='bg-zinc-200 py-1 px-3'>5</p>
                        <p className='bg-zinc-200 py-1 px-3'>6</p>
                      </motion.span>
                    </>
                  )}
                </AnimatePresence>
              </div>
              
              <div className='flex justify-between items-center overflow-hidden lg:items-start lg:gap-2 lg:relative lg:h-60 lg:pr-[10px]'>
                <p onClick={() => setDormitorios(!dormitorios)} className='py-1 active:translate-y-1 duration-100 cursor-pointer'>Dormitorios <i className='fa-solid fa-angle-right text-sm lg:absolute lg:pointer-events-none lg:opacity-0'/>
                                                 <i className='absolute pointer-events-none opacity-0 fa-solid fa-angle-down text-sm lg:relative lg:opacity-100 lg:pointer-events-auto'/></p>
                <AnimatePresence mode='wait'>
                  {dormitorios && (
                    <>{/* mobile*/}
                      <motion.span className='flex md:-translate-x-50 lg:hidden'
                                     initial={{x:100,opacity:0}}
                                     animate={{x:0,  opacity:1}}
                                        exit={{x:100,opacity:0}}
                                  transition={{duration:0.5   }}>
                        <p className='bg-zinc-200 py-1 px-3'>1</p>
                        <p className='bg-zinc-200 py-1 px-3'>2</p>
                        <p className='bg-zinc-200 py-1 px-3'>3</p>
                        <p className='bg-zinc-200 py-1 px-3'>4</p>
                        <p className='bg-zinc-200 py-1 px-3'>5</p>
                        <p className='bg-zinc-200 py-1 px-3'>6</p>
                      </motion.span>
                      {/* desktop */}
                      <motion.span className='hidden lg:flex flex-col absolute right-0 top-8'
                                     initial={{y:100,opacity:0}}
                                     animate={{y:0,  opacity:1}}
                                        exit={{y:100,opacity:0}}
                                  transition={{duration:0.5   }}>
                        <p className='bg-zinc-200 py-1 px-3'>1</p>
                        <p className='bg-zinc-200 py-1 px-3'>2</p>
                        <p className='bg-zinc-200 py-1 px-3'>3</p>
                        <p className='bg-zinc-200 py-1 px-3'>4</p>
                        <p className='bg-zinc-200 py-1 px-3'>5</p>
                        <p className='bg-zinc-200 py-1 px-3'>6</p>
                      </motion.span>
                    </>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      )}      

      {/*Post 2 (IMAGEN)*/}
      {post2 && (
        <motion.div className={`p-3 flex flex-col gap-5 md:px-10 md:w-4/5 md:ml-[6.5%] lg:px-20 xl:w-4/6 xl:ml-[11%] 2xl:w-4/7 2xl:ml-[14.4%]`}
                      initial={{x: direction === 1 ? -100 : 100, opacity:0}}
                      animate={{x:0   , opacity:1                         }}
                   transition={{duration:1,type:'spring'                  }}>
          <div className='flex justify-between'>
            <button onClick={() => {setDirection(0) ;setPost2(false); setPost1(true)}} 
                  className='flex justify-start bg-zinc-200 py-1 px-2 mr-auto active:translate-y-1 duration-100 cursor-pointer'>Volver</button>
            <button onClick={() => {setDirection(1);setPost3(true); setPost2(false)}} 
                  className='flex justify-end bg-black text-white py-1 px-2 ml-auto active:translate-y-1 duration-100 cursor-pointer'>Continuar</button>
          </div>
          <div className='flex justify-between items-center overflow-hidden md:w-3/4'>
            <label for='principalImage'>Imagen Principal</label>
            <label for='principalImage' className='fa-solid fa-plus bg-black text-white py-2 px-2'/>
            <input type='file' id='principalImage' className='hidden'/>
          </div>
          <div className='flex justify-between items-center overflow-hidden md:w-3/4'>
            <label for='secondaryImages' className='flex gap-2 items-center'>Imagenes Secundarias <p className='text-xs text-zinc-500'>(Hasta 4)</p></label>
            <label for='secondaryImages' className='fa-solid fa-plus bg-black text-white py-2 px-2'/>
            <input type='file' id='secondaryImages' className='hidden'/>
          </div>
        </motion.div>
      )}
      

      {/*Post 3 (CONTACTO)*/}
      {post3 && (
        <motion.div className={`p-3 flex flex-col gap-5 md:px-10 md:w-4/5 md:ml-[13%] lg:px-20 xl:w-4/6 xl:ml-[22%] 2xl:w-4/7 2xl:ml-[28.8%]`}
                      initial={{x: direction === 1 ? -100 : 100, opacity:0}}
                      animate={{x:0       , opacity:1                     }}
                   transition={{duration:1, type:'spring'                 }}>
          <div className='flex justify-between'>
            <button onClick={() => {setDirection(0) ;setPost3(false); setPost2(true)}} 
                  className='flex justify-start bg-zinc-200 py-1 px-2 mr-auto active:translate-y-1 duration-100 cursor-pointer'>Volver</button>
            <button onClick={() => {setDirection(1) ;setPost4(true); setPost3(false)}} 
                  className='flex justify-end bg-black text-white py-1 px-2 ml-auto active:translate-y-1 duration-100 cursor-pointer'>Continuar</button>
          </div>
          <p>Mi información de contacto</p>
          <div className='flex justify-around w-full bg-zinc-100 py-1'>
            <p>Inmobiliaria</p>
            <p>Dueño directo</p>
          </div>
          <p>Email: </p>
          <input type="text" placeholder='Nombre o Inmobiliaria a cargo' className='border-b border-zinc-300 outline-none md:w-3/4'/>
          <p>Teléfono: </p>
        </motion.div>
      )}
      

      {/*Post 4 (PRECIO)*/}
      {post4 && (
        <motion.div className='p-3 flex flex-col gap-5 md:px-10 md:ml-auto md:w-4/5 lg:px-20 xl:w-4/6 2xl:w-4/7'
                      initial={{x: direction === 1 ? -100 : 100, opacity:0}}
                      animate={{x:0       , opacity:1                     }}
                   transition={{duration:1, type:'spring'                 }}>
          <button onClick={() => {setDirection(0) ;setPost4(false); setPost3(true)}} 
                className='flex justify-start bg-zinc-200 py-1 px-2 mr-auto active:translate-y-1 duration-100 cursor-pointer'>Volver</button>
          <div className='flex w-full justify-between'>
            <p>Precio en USD</p>
            <div className='flex'>
              <p className='border-b border-zinc-300'>$</p>
              <input type="text" placeholder=' 999.999' className='border-b border-zinc-300 outline-none' />
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <p>Agregá una descripción</p>
            <textarea className="bg-zinc-100 outline-none w-3/4 h-[30vh] p-2" minLength={100} maxLength={500} placeholder='minimo 100 caracteres, maximo 500.' />
          </div>
          <button className='flex justify-center ml-auto w-3/5 bg-black text-white py-2 px-3 shadow-xl cursor-pointer active:translate-y-1 duration-100'>Publicar</button>
        </motion.div>
      )}
    </div>
    </>
  )
}

export default Post