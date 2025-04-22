import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-control-geocoder/dist/Control.Geocoder.css';

import MapControls from '../components/MapControls'

const position = [-34.6037, -58.3816] // Ejemplo: Buenos Aires

const Map = () => {
  return (
    <div className='w-9/10 drop-shadow-xl mx-auto mt-5 lg:w-10/10 lg:px-20'>
      <MapContainer center={position} 
                      zoom={13      }
               zoomControl={false   }
                     style={{height: '80vh', width: '100%', borderRadius: '12px'}}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://hot.openstreetmap.org">Humanitarian OSM Team</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <MapControls />
        <Marker position={position}>
          <Popup>
            Estás aquí.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default Map
