import { useMap } from 'react-leaflet';
import { useState } from 'react';
import L from 'leaflet';
import 'leaflet-control-geocoder';

const MapControls = () => {
  const map = useMap();
  const [search, setSearch] = useState('');

  const handleSearch = async () => {
    if (!search) return;

    const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(search)}`);
    const data = await res.json();

    if (data.length > 0) {
      const { lat, lon, display_name } = data[0];
      const latlng = L.latLng(lat, lon);
      
      map.setView(latlng, 13);

      L.marker(latlng).addTo(map).bindPopup(display_name).openPopup();
    } else {
      alert("No se encontraron resultados");
    }
  };

  return (
    <>

      {/* zoom */}
      <div className="absolute top-2 right-2 flex flex-col gap-2 z-[1000]">
        <i onClick={() => map.zoomIn()}
           className="fa-solid fa-plus bg-white shadow-xl text-black px-3.5 py-[12px] rounded-xl cursor-pointer"/>
        <i onClick={() => map.zoomOut()}
           className="fa-solid fa-minus bg-white shadow-xl text-black px-3.5 py-[12px] rounded-xl cursor-pointer"/>
      </div>

      {/* search */}
      <div className="absolute top-2 left-2 z-1000 flex gap-2 rounded-xl drop-shadow-xl">
        <input type="text"
               value={search}
               placeholder="Buscar ubicación..."
               onChange={(e) => setSearch(e.target.value)}
               className="px-2 py-[7px] text-sm rounded-md outline-none bg-white text-zinc-600"/>
        <button onClick={handleSearch}
                className="px-3 py-[7px] text-sm bg-white rounded-md">
          Buscar
        </button>
      </div>

    </>
  );
};

export default MapControls;
