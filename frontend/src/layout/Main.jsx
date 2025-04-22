import { motion } from 'motion/react'
import Carousel from '../components/Carousel.jsx'

const imgRecomended = [
  "/properties/santafe1.jpg",
  "/properties/canal1.jpg",
  "/properties/libertador1.jpg",
  "/properties/libertadorr1.jpg",
  "/properties/alameda1.jpg",
]

const imgFuture = [
  "/future-propertie3.jpg",
  "/future-propertie2.jpg",
  "/future-propertie1.webp"
]

const Main = () => {

  return (
    <>
    <div className='overflow-hidden'>

      {/* mobile carousels */}
      <motion.div className='text-center w-4/5 mx-auto mb-20 lg:hidden'
                    initial={{x:100,opacity:0 }}
                whileInView={{x:0  ,opacity:1 }}
                   viewport={{amount:0.7      }}
                 transition={{duration: 1     }}>
        <div>
          <p className='text-3xl font-bold leading-tight'>Nuestras recomendaciones</p>
          <p className="text-base text-zinc-700 mt-4">Lo mejor del mercado, elegido para ti.</p>
        </div>
        <div className='flex justify-center mt-6'>
          <Carousel imgs={imgRecomended} />
        </div>
        <div>
          <p className='text-xl mt-4 font-semibold'>Alameda 22</p>
          <p className='text-lg text-gray-600'>Nordelta, Buenos Aires</p>
          <p className='text-xl mt-2 font-semibold'>$299999</p>
          <button className='bg-black text-white py-2 px-4 rounded-lg shadow-xl mt-4'>
            Ver propiedad
          </button>
        </div>
      </motion.div>

      <motion.div className='text-center w-4/5 mx-auto lg:hidden'
                    initial={{x:100,opacity:0 }}
                whileInView={{x:0  ,opacity:1 }}
                   viewport={{amount:0.7      }}
                 transition={{duration: 1     }}>
        <div>
          <p className='text-3xl font-bold leading-tight'>Futuras propiedades</p>
          <p className="text-base text-zinc-700 mt-4">Propiedades en desarrollo, listas para ti muy pronto.</p>
        </div>
        <div className='flex justify-center mt-6'>
          <Carousel imgs={imgFuture} />
        </div>
        <div>
          <p className='text-xl mt-4 font-semibold'>Vista Mar Towers</p>
          <p className='text-lg text-gray-600'>Punta del Este, Uruguay</p>
          <p className='text-xl mt-2 font-semibold'>Desde $180000</p>
          <button className='bg-black text-white py-2 px-4 rounded-lg shadow-xl mt-4'>
            Ver detalles del proyecto
          </button>
        </div>
      </motion.div>

      {/* desktop carousels */}
      <motion.div className='hidden lg:flex h-[100vh] p-20 justify-between'>
        <motion.div className='flex flex-col justify-center gap-6 font-bold h-[60vh] w-[35vw]'
                      initial={{x:-100,opacity:0}}
                  whileInView={{x:0   ,opacity:1}}
                     viewport={{once: true,amount:0.5}}
                 transition={{duration:3, type:"spring"}}>
          <p className='leading-tight text-5xl'>Nuestras recomendaciones</p>
          <p className="text-lg text-zinc-700">Lo mejor del mercado, elegido para ti.</p>
          <p className='text-2xl'>Alameda 22</p>
          <p className='text-xl'>Nordelta, Buenos Aires</p>
          <p className='text-2xl'>$299999</p>
          <button className='bg-black text-white py-1 px-2 rounded-lg w-1/2 shadow-xl'>Ver propiedad</button>
        </motion.div>
        <Carousel imgs={imgRecomended} idPrefix={"recomended"} className='w-[50vw] h-[60vh]'/>
      </motion.div>

      <motion.div className='hidden lg:flex h-[85vh] p-20 justify-between'>
        <motion.div className='flex flex-col justify-center gap-6 font-bold h-[60vh] w-[35vw]'
                      initial={{x:-100,opacity:0}}
                  whileInView={{x:0   ,opacity:1}}
                     viewport={{once: true,amount:0.5}}
                   transition={{duration:3, type:"spring"}}>
          <p className='leading-tight text-5xl'>Futuras propiedades</p>
          <p className="text-lg text-zinc-700">Propiedades en desarrollo, listas para ti muy pronto.</p>
          <p className='text-2xl'>Vista Mar Towers</p>
          <p className='text-xl'>Punta del Este, Uruguay</p>
          <p className='text-2xl'>Desde $180000</p>
          <button className='bg-black text-white py-1 px-2 rounded-lg w-1/2 shadow-xl'>Ver detalles del proyecto</button>
        </motion.div>
        <Carousel imgs={imgFuture} idPrefix={"future"} className='w-[50vw] h-[60vh]'/>
      </motion.div>


    </div>
      
    </>
  )
}

export default Main