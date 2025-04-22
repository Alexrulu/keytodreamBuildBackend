import { motion } from 'motion/react'
const Carousel = ({imgs, idPrefix, className = ""}) => {
  return(
    <>
    {/* for mobile */}
      <div className='carousel rounded-lg lg:hidden h-[30vh]' >
          {imgs.map((img, index) => (
            <div key={index} className='carousel-item w-full'>
              <img src={img} className='w-full object-cover h-full'/>
            </div>
          ))}
      </div>

      {/* for desktop */}
      <motion.div className={`hidden lg:flex carousel rounded-lg shadow-xl ${className}`}
                    initial={{opacity:0, x:-200}}
                whileInView={{opacity:1, x:0   }}
                   viewport={{once: true, amount:0.5}}
                 transition={{duration:3, type:"spring"}}>
        {imgs.map((img, index) => {
          const total = imgs.length;
          const prev = (index - 1 + total) % total;
          const next = (index + 1) % total;
      
          return (
            <div key={index} id={`${idPrefix}-slide${index}`} className="carousel-item relative w-full">
              <img src={img} className="w-full object-cover h-full" alt={`Slide ${index}`} />
              <div className="absolute left-5 right-5 flex bottom-5 transform justify-between">
                <a href={`#${idPrefix}-slide${prev}`} className="text-white px-4 py-1.5 bg-white/20 rounded-lg backdrop-blur-sm shadow-xl" onClick={(e) => {e.preventDefault();
                  document.getElementById(`${idPrefix}-slide${prev}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });}}>❮</a>
                <a href={`#${idPrefix}-slide${next}`} className="text-white px-4 py-1.5 bg-white/20 rounded-lg backdrop-blur-sm shadow-xl" onClick={(e) => {e.preventDefault();
                  document.getElementById(`${idPrefix}-slide${next}`)?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });}}>❯</a>
              </div>
            </div>
          );
        })}
      </motion.div>

    </>
  )
}

export default Carousel