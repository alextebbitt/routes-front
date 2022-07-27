import { useDispatch, useSelector } from "react-redux";
import "./Route.scss";
import { Button, Skeleton } from "antd";
import RouteCard from "./RouteCard/RouteCard";
const Route = ({ isLoadingRoutes }) => {

  const { routes } = useSelector((state) => state.routes);

  const route = routes.map((route) => {
    return <RouteCard key={route._id} route={route} />
  });

  return <div className="container">
    {route.length ?
      <>{route} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</>
      :
      !isLoadingRoutes ?
        <div className="search route ">
          Ninguna ruta satisface los criterios de búsqueda. ¡Prueba con otra!
        </div>
        : null
    }
    {isLoadingRoutes &&
      <div className="route" style={{ height: "290px" }}>
        <Skeleton.Image style={{ height: "184px", width: "184px" }} active />
      </div>
    }

  </div>;
};
export default Route;
