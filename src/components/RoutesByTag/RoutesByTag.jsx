import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { getRoutesByTag } from "../../features/routes/routesSlice";
import BigSpin from "../BigSpin/BigSpin";
import RouteView from "../RoutesView/RouteView/RouteView";

const RoutesByTag = () => {

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const { tag } = useParams();

  const getRoutes = async () => {
    setIsLoading(true);
    await dispatch(getRoutesByTag({ tag, page }))
    setIsLoading(false);
  }

  useEffect(() => {
    getRoutes();
    // eslint-disable-next-line
  }, [tag]);

  return (
    <div>
      <h1>Rutas por etiquetas: {tag}</h1>
      {isLoading ?
        <BigSpin />
        :
        <RouteView />
      }
    </div>
  )
}

export default RoutesByTag