import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getRouteById } from "../../features/routes/routesSlice";
import axios from "axios";
import PoiDetail from "./PoiDetail/PoiDetail";
import Comments from "../RoutesView/RouteView/Comments/Comments";
const API_URL = process.env.REACT_APP_API_URL;

const RouteDetail = () => {
  const { route } = useSelector((state) => state.routes);
  const { id } = useParams();
  const [loadingData, setLoadingData] = useState(false);
  const [map, setMap] = useState("/loadingmap.gif");
  const dispatch = useDispatch();

  const getDetail = async () => {
    setLoadingData(true);
    await dispatch(getRouteById(id));
    setLoadingData(false);
  };

  const getMap = async () => {
    const response = await axios(`${API_URL}/routes/map/id/${id}`, {
      responseType: "blob",
    });
    const image = URL.createObjectURL(response.data);
    setMap(image);
  };

  useEffect(() => {
    getDetail();
    getMap();
    // eslint-disable-next-line
  }, [id]);

  const poi = route.pois?.map((poi) => <PoiDetail key={poi._id} poi={poi} />);

  const tag = route.tags?.map((tag, i) => (
    <>
      <Link key={tag + i} to={`/tag/${tag}`}>
        {tag}
      </Link>
      &nbsp;&nbsp;
    </>
  ));

  return (
    <div>
      <div style={{ float: "right" }}>
        <img src={map} alt="map" />
      </div>
      <div>ID: {id}</div>
      {loadingData || !route._id ? (
        <h1>LoadingData...</h1>
      ) : (
        <div>
          <h1>{route.name}</h1>
          <img src={route.image} alt={route.name} />
          <div>DIFFICULTY: {route.difficulty}</div>
          <div>DURATION: {route.duration}</div>
          <div>STARTING POINT: {route.startingPoint}</div>
          <div>ENDING POINT: {route.endingPoint}</div>
          <div>TAGS: {tag}</div>
          <div>DESCRIPTION: {route.description}</div>
          <div>{poi}</div>
          <div>
            <Comments routeId={id} />
          </div>
        </div>
      )}
    </div>
  );
};

export default RouteDetail;
