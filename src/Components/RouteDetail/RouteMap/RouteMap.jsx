import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
// import L from 'leaflet';

const RouteMap = ( { route }) => {

  const [content, setContent] = useState('');

  // const myIcon = L.icon({
  //   iconUrl: '/map-pointer.svg',
  //   iconSize: [38, 95],
  //   iconAnchor: [22, 94],
  //   popupAnchor: [-3, -76],
  //   shadowUrl: null, //'/my-icon-shadow.svg',
  //   shadowSize: null, //[68, 95],
  //   shadowAnchor: null, //[22, 94]
  // });

  const marker = route.pois.map((poi) => {
    return (
      <Marker
        key={poi._id}
        // icon={myIcon}
        eventHandlers={{ click: () => setContent(poi) }}
        position={[poi.latitude, poi.longitude]}>
        <Popup>
          <div>
            <h3>{poi.name}</h3>
            <p>{poi.description}</p>
          </div>
        </Popup>
      </Marker>
    )
  })

  return (<>
    <MapContainer
      center={[39.469795, -0.3766718]}
      zoom={16.2}
      scrollWheelZoom={false}
      style={{ height: "80vh" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {marker}
    </MapContainer>
    <div>
      THIS DIV COULD BE A MODAL
      <h3>{content.name}</h3>
      <p>{content.description}</p>
    </div>
  </>)
}

export default RouteMap