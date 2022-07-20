import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRoutes } from "../../features/routes/routesSlice";
import RouteView from "./RouteView/RouteView";

const RoutesView = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);

  const getAllRoutes = async () => {
    await dispatch(getRoutes());
    setIsLoading(false);
  };

  useEffect(() => {
    getAllRoutes();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <h1>Routes View</h1>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <RouteView />
        </>
      )}
    </div>
  );
};

export default RoutesView;
