import { MapContainer, TileLayer, Marker, Popup, Polyline} from 'react-leaflet'
import "leaflet/dist/leaflet.css";
import { useDispatch, useSelector } from 'react-redux';
import { icon } from 'leaflet';
import { clear } from '../redux/slices/flightSlice';

const MapView = ({openModal}) => {
  const state = useSelector((store) => store)
  const dispatch = useDispatch();

  // ikon oluşturma
  const planeIcon = icon({
    iconUrl: '/plane-i.png',
    iconSize: [30,30]
  })

  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ]

  return (
    <MapContainer // dış container
    center={[39.149702, 35.420686]} 
    zoom={6} 
    scrollWheelZoom={false}>

      {/*ekranda gösterilen harita*/}
      <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />


    {state.flights.map((flight) => (
      <Marker icon={planeIcon} position={[flight.lat, flight.lng]}>
        <Popup>
          <div className='popup'>
            <span>Kod: {flight.code} </span>
            <button onClick={() => openModal(flight.id)}>Detay</button>
            {state.trail.length > 0 && (
              <button onClick={() => dispatch(clear())}>Rotayı Temizle</button>
            )}
            
            
          </div>
        </Popup>
      </Marker>
    ))}

    <Polyline positions={state.trail} />
    </MapContainer>
  )
}

export default MapView;
