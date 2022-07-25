import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRoutes } from "../../features/routes/routesSlice";
import RouteView from "./RouteView/RouteView";
import "./RoutesView.scss"
import Search from "../Search/Search";
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
      <h1>Routes View</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          {/* 
           */}

           <Search/>
        </>
      )}
    </div>
  );
};

export default RoutesView;