import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet';

const RouteMap = ({ route, height = "100vh", zoomControl = true, userPos }) => {

  const centerIcon = L.icon({
    iconUrl: '/circle.svg',
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: null, //[-3, -76],
    shadowUrl: null, //'/my-icon-shadow.svg',
    shadowSize: null, //[68, 95],
    shadowAnchor: null, //[22, 94]
  });

  const marker = route.pois.map((poi) => {
    return (
      <Marker
        key={poi._id}
        position={[poi.latitude, poi.longitude]}>
        <Popup className="pop2">
          <div className="pop">
            <h3>{poi.name}</h3>
            <p>{poi.description}</p>
          </div>
        </Popup>
      </Marker>
    );
  });

  if (zoomControl && userPos.lat) {
    marker.push(<Marker
      key="center"
      icon={centerIcon}
      position={[userPos.lat, userPos.lon]} />
    );
  }

  return (<>
    {(!zoomControl || userPos.lat) &&
      <MapContainer
        center={[route.latitude, route.longitude]}
        zoom={15}
        scrollWheelZoom={false}
        zoomControl={zoomControl}
        style={{ height: height }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {marker}
      </MapContainer>
    }
  </>)
}

export default RouteMap;