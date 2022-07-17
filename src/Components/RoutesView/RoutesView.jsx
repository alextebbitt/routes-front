import { useEffect } from "react";
import { useDispatch } from "react-redux"
import { getRoutes } from "../../features/routes/routesSlice";
import RouteView from "./RouteView/RouteView";

const RoutesView = () => {

  const dispatch = useDispatch();

  const getAllRoutes = async () => {
    await dispatch(getRoutes());
  }
  useEffect(() => {
    getAllRoutes();
  }, []);

  return (
    <div>
      <h1>Routes View</h1>
      <RouteView />
    </div>
  )
}

export default RoutesView