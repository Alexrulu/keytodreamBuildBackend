import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

import Filtros from "../components/Filtros"

const Comprar = () => {

  const [properties, setProperties] = useState([])

  useEffect(() => {
    fetch('http://localhost:5000/api/properties')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error al cargar las propiedades:', error));
  }, [])

  return (
    <>
      <Filtros />

      <div className="w-full my-3 px-3 flex flex-col gap-5 md:px-10 lg:px-20 lg:grid lg:grid-cols-3">

        {properties.filter(property => property.type === 1).map((property, index) => (
          <Link to={`/article/${property.id}`} key={property.id}>
            <article className="bg-zinc-100 justify-between h-[20vh] w-full flex gap-1 text-zinc-800 text-sm hover:scale-105 duration-300">

              <img src={`http://localhost:5000${property.principalImage}`} className="w-1/2  object-cover object-center" />
              
              <div className="p-2 flex flex-col justify-between w-1/2">
                <span>${property.price}</span>
                <h2>{property.adress}</h2>
                <h3 className="text-zinc-600">{property.city}</h3>
                <p className="text-xs truncate">{property.description}</p>
                <h4>{property.personalName}</h4>
              </div>
              
            </article>
          </Link>
        ))}
        

      </div>

    </>
  )
}

export default Comprar