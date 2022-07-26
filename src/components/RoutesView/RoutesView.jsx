import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRoutes } from "../../features/routes/routesSlice";
import RouteView from "./RouteView/RouteView";
import "./RoutesView.scss"
import Search from "../Search/Search";
import BigSpin from "../BigSpin/BigSpin";
const RoutesView = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const getAllRoutes = async () => {
    await dispatch(getRoutes());
    setIsLoading(false);
  };

  useEffect(() => {
    getAllRoutes();
  }, []);

  return (
    <div>
      <h1>Vista de rutas</h1>
      {isLoading ? (
        <BigSpin />
      ) : (
        <>
          {/*
           */}

          <Search />
        </>
      )}
    </div>
  );
};

export default RoutesView;
