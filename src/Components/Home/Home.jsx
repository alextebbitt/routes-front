import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRoutes } from "../../features/routes/routesSlice";
import Search from "../Search/Search";
import "./Home.scss";
import Poi from "./Poi/Poi";
import Route from "./Route/Route";

const Home = () => {
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
    <div className="home">
      Home
      <div>
        <Search/>
      </div>
      <div>Explora Valencia</div>
      <div className="show-routes">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Route/>
        </>
      )}
      </div>
      <div>Categorías</div>
      <button>ejemplo1</button>  <button>ejemplo2</button>
      <div className="show-pois">
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <Poi />
        </>
      )}
      </div>
    </div>
  );

}

export default Home;
