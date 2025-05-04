import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Article = () => {

  const { id } = useParams()
  const [property, setProperty] = useState(null)
  const [images, setImages] = useState([])
  const [star, setStar] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:5000/api/properties/${id}`)
      .then(response => response.json())
      .then(data => { setProperty(data)
        const allImages = [data.principalImage, ...(data.secondaryImages || [])]
        setImages(allImages) 
      })
      .catch(error => console.error('Error al cargar la propiedad:', error));
  }, [id])

  if (!property) {
    return <div>Cargando...</div>;
  }

  return (
    <>
      <div className='flex flex-col gap-10 px-6 md:px-10 lg:px-0 lg:mx-20 lg:flex lg:gap-10 lg:justify-center lg:flex-row-reverse'>
        <div className='hidden lg:w-[50vw] lg:flex'/>
        <div className='py-5 h-[50vh] flex gap-2 flex-col lg:right-20 lg:fixed lg:w-[45vw] lg:gap-5 lg:py-10 lg:h-[90vh] lg:justify-between'>
          <div className="h-1/2 lg:flex carousel  w-full mx-auto">
            {images.map((img, index) => {
              return (
                <div key={index} id={`property-slide${index}`} className="carousel-item relative w-full">
                  <img src={`http://localhost:5000${img}`} className="w-full object-cover h-full" />
                </div>
              );
            })}
          </div>
          <div className='grid grid-cols-2 grid-rows-2 h-1/2 w-full overflow-hidden gap-2 lg:gap-5'>
            {images.slice(0, 4).map((img, index) => (
              <div key={index} className="relative w-full h-full">
                <img
                  src={`http://localhost:5000${img}`}
                  onClick={() => {
                    document.getElementById(`property-slide${index}`)?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'nearest',
                      inline: 'center',
                    });
                  }}
                  className='w-full h-full object-cover cursor-pointer hover:brightness-90 transition '
                />
              </div>
            ))}
          </div>
        </div>

        <div className='flex flex-col gap-5 mb-[9vh] lg:flex-start lg:pt-10 lg:w-[40vw] lg:justify-between'>
          <div className='flex justify-between'>
            <p>{(property.type) == 1 ? "Venta" : "Alquiler"}</p>
            <i onClick={() => setStar(!star)} className={`fa-star text-xl transition-opacity duration-300 
                      ${star ? "fa-solid opacity-100" : "fa-regular opacity-50"}`}/>
          </div>
          <p className='font-bold text-6xl leading-tight'>{property.adress}</p>
          <p className='text-5xl'>{property.city}</p>
          <p className='text-4xl'>${property.price}</p>
          <p className='text-justify text-sm text-zinc-700'>{property.description}</p>
          <span className='h-[1px] bg-zinc-300'/>
          <div className='mt-3 flex flex-col gap-1'>
            <p>Metros cuadrados: {property.m2tot}</p>
              <p className='w-1/2'>Ambientes: {property.ambiente}</p>
              <p className='w-1/2'>Baños: {property.bathroom}</p>
              <p>Dormitorios: {property.bedroom}</p>
              <p>Espacio para vehiculos: {property.cars}</p>
          </div>
          <span className='h-[1px] bg-zinc-300'/>
          <div className='mt-3 flex flex-col gap-1 mb-10 lg:mb-0'>
            <p>Contactar al anunciante</p>
            <p>{property.personalName}</p>
            <p>Email: {property.email}</p>
            <p>Teléfono: {property.phonePersonal}</p>
            <div className='flex flex-col gap-2'>
              <p>¿Quieres dejarle un mensaje?</p>
              <div className='flex flex-col mt-2'>
                <textarea maxLength={100} placeholder='Hasta 100 caracteres' 
                  className='p-2 h-10 w-full outline-none bg-zinc-100 text-sm focus:h-20 transition-all duration-200' />
                <div className='flex text-zinc-600 border-1 bg-white border-zinc-100 p-2 text-sm'>
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