import { useState } from 'react'

import Carousel from '../components/Carousel.jsx'

const property = {
   name:"Avenida Corrientes 348", price:23333, 
   img:["/properties/canal1.jpg", "/properties/libertador1.jpg", "/properties/cabildo1.jpg", "/properties/libertadorr1.jpg"],
   city:"Buenos Aires", owner:"AB Brokers",
   description:"Living comedor con espectacular vista al agua. Cocina integrada. Mesada con isla de silestone. Muy luminoso con gran vista desde todo el ambiente. Dependencia y Lavadero. Dos dormitorios en suite con salida al balcón. Suite principal con vestidor y baño con box de ducha revestido en porcelanato",
   m2:236, rooms:5, bathrooms:4, bedrooms:4, cars:2
}

const Article = () => {

  const [star, setStar] = useState(false)

  return (
    <>
      <div className='flex flex-col gap-10 px-6 md:px-10 lg:px-0 lg:mx-20 lg:flex lg:gap-10 lg:justify-center lg:flex-row-reverse'>

        <div className='hidden lg:w-[50vw] lg:flex'/>

        <div className='py-5 h-[50vh] flex gap-2 flex-col lg:right-20 lg:fixed lg:w-[45vw] lg:gap-5 lg:py-10 lg:h-[90vh] lg:justify-between'>
          <div className="h-1/2 lg:flex carousel rounded-lg w-full mx-auto">
            {property.img.map((img, index) => {
              return (
                <div key={index} id={`property-slide${index}`} className="carousel-item relative w-full">
                  <img src={img} className="w-full object-cover h-full" alt={`Slide ${index}`} />
                </div>
              );
            })}
          </div>
          <div className='grid grid-cols-2 grid-rows-2 h-1/2 w-full rounded-lg overflow-hidden gap-2 lg:gap-5'>
            {property.img.slice(0, 4).map((img, index) => (
              <div key={index} className="relative w-full h-full">
                <img
                  src={img}
                  alt={`Miniatura ${index}`}
                  onClick={() => {
                    document.getElementById(`property-slide${index}`)?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'nearest',
                      inline: 'center',
                    });
                  }}
                  className='w-full h-full object-cover cursor-pointer hover:brightness-90 transition rounded-lg'
                />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-5 mb-[9vh] lg:flex-start lg:pt-10 lg:w-[40vw] lg:justify-between'>
          {/* <div className='flex justify-between'>
            <p>Alquiler</p>
            <i onClick={() => setStar(!star)} className={`fa-star text-xl transition-opacity duration-300 
                      ${star ? "fa-solid opacity-100" : "fa-regular opacity-50"}`}/>
          </div> */}
          <p className='font-bold text-6xl leading-tight'>{property.name}</p>
          <p className='text-5xl'>{property.city}</p>
          <p className='text-4xl'>${property.price}</p>
          <p className='text-justify text-sm text-zinc-700'>{property.description}</p>
          <span className='h-[1px] bg-zinc-300'/>
          <div className='mt-3 flex flex-col gap-1'>
            <p>Metros cuadrados: {property.m2}</p>
              <p className='w-1/2'>Ambientes: {property.rooms}</p>
              <p className='w-1/2'>Baños: {property.bathrooms}</p>
              <p>Dormitorios: {property.bedrooms}</p>
              <p>Espacio para vehiculos: {property.cars}</p>
          </div>
          <span className='h-[1px] bg-zinc-300'/>
          <div className='mt-3 flex flex-col gap-1 mb-10 lg:mb-0'>
            <p>Contactar al anunciante</p>
            <p>{property.owner}</p>
            <p>Email:</p>
            <p>Teléfono:</p>
            <div className='flex flex-col gap-2'>
              <p>¿Quieres dejarle un mensaje?</p>
              <div className='flex flex-col mt-2'>
                <textarea maxLength={100} placeholder='Hasta 100 caracteres' 
                  className='p-2 h-10 w-full outline-none bg-zinc-100 rounded-t-lg text-sm focus:h-20 transition-all duration-200' />
                <div className='flex text-zinc-600 border-1 border-zinc-100 rounded-b-lg p-2 text-sm'>
                  <button className='w-1/2'>WhatsApp</button>
                  <button className='w-1/2'>Email</button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Article