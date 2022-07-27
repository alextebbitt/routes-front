import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Tag } from "antd";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getPoisNearBy } from '../../features/routes/routesSlice';
import "./RoutesNearBy.scss";
import L from 'leaflet';
import BigSpin from '../BigSpin/BigSpin';

const RoutesNearBy = () => {

  const { pois } = useSelector(state => state.routes);
  const dispatch = useDispatch();
  const [mapCenter, setMapCenter] = useState({});
  const [loading, setLoading] = useState(false);

  const centerIcon = L.icon({
    iconUrl: '/circle.svg',
    iconSize: [38, 38],
    iconAnchor: [19, 19],
    popupAnchor: null, //[-3, -76],
    shadowUrl: null, //'/my-icon-shadow.svg',
    shadowSize: null, //[68, 95],
    shadowAnchor: null, //[22, 94]
  });

  const launchGetPoisNearby = async () => {
    setLoading(true);
    if (navigator.geolocation) {
      await navigator.geolocation.getCurrentPosition((pos) => {
        setMapCenter({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude,
        });
      })
    } else {
      setLoading(false);
    }
  }

  useEffect(() => {
    launchGetPoisNearby();
  }, []);

  useEffect(() => {
    if (mapCenter.lat) {
      dispatch(getPoisNearBy(mapCenter));
    }
    setLoading(false);
  }, [mapCenter]);

  const truncateAfterWord = (str, chars) =>
    str.length < chars ?
      str
      :
      `${str.substr(0, str.substr(0, chars - 3).lastIndexOf(" "))}...`;

  const marker = pois?.map((poi) => {
    return (
      <Marker
        key={poi._id}
        position={[poi.latitude, poi.longitude]}>
        <Popup >
          <div className="pop">
            <h3>{poi.name}</h3>
            <p>{truncateAfterWord(poi.description, 300)}</p>
            <Link to={`/route/${poi.routeId._id}`}>
              <Tag >{poi.routeId.name}</Tag>
            </Link>
          </div>
        </Popup>
      </Marker>
    );
  });

  marker.push(<Marker
    key="center"
    icon={centerIcon}
    position={[mapCenter.lat, mapCenter.lon]}
  />);

  return (<div className="nearby">
    <h3>Lugares de interés cercanos</h3>
    {mapCenter.lat && !loading ?
      <MapContainer className="map"
        center={[mapCenter.lat, mapCenter.lon]}
        zoom={17}
        scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {marker}
      </MapContainer>
      :
      <BigSpin />
    }
  </div>)
}

export default RoutesNearBy;