import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getRoutes } from "../../features/routes/routesSlice";
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
      Home(logo))
      <div>Explora Valencia</div>
      <div> Ver todas</div>
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
      <div>Lugares que visitar</div>
      <div> Ver todos</div>
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
