import { Link } from "react-router-dom"

import Filtros from "../components/Filtros"

const Alquilar = () => {

  const properties = [
    {name:"Avenida Corrientes 348",     price:23333, img:"/properties/canal1.jpg"      , city:"Buenos Aires", owner:"AB Brokers"},
    {name:"Avenida del Libertador 1000",price:23333, img:"/properties/libertador1.jpg" , city:"Buenos Aires", owner:"Laura Gómez"},
    {name:"Avenida Cabildo 1500",       price:23333, img:"/properties/cabildo1.jpg"    , city:"Buenos Aires", owner:"Metro Realty"},
    {name:"San Martín 1234",            price:23333, img:"/properties/libertadorr1.jpg", city:"Córdoba"     , owner:"Juan Pérez"}
  ]

  return (
    <>
      <Filtros />

      <div className="w-full my-3 px-3 flex flex-col gap-3 md:px-10 lg:px-20 lg:grid lg:grid-cols-3">

        {properties.map((property, index) => (
          <Link to='/article'>
            <article className="bg-zinc-100 rounded-lg h-[20vh] w-full justify-between flex gap-1 text-zinc-800 text-sm">
              
              <div className="p-2 flex flex-col justify-between">
                <span>${property.price}</span>
                <h2>{property.name}</h2>
                <h3 className="text-zinc-600">{property.city}</h3>
                <h4>{property.owner}</h4>
              </div>
              <img src={property.img} className="w-1/2 rounded-lg object-cover object-center" />
            </article>
          </Link>
        ))}
        

      </div>

    </>
  )
}

export default Alquilar