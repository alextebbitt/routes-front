import React from "react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRandomPois, getRoutes } from "../../features/routes/routesSlice";
import { Skeleton } from "antd";
import "./Home.scss";
import Poi from "./Poi/Poi";
import Route from "./Route/Route";

const Home = () => {

  const dispatch = useDispatch();
  const { paginationData } = useSelector((state) => state.routes);
  const [isLoadingRoutes, setIsLoadingRoutes] = useState(false);
  const [isLoadingPois, setIsLoadingPois] = useState(false);
  const [routesPage, setRoutesPage] = useState(1);

  const getAllRoutes = async () => {
    setIsLoadingRoutes(true);
    await dispatch(getRoutes(routesPage));
    setIsLoadingRoutes(false);
  };

  const getSomePois = async () => {
    setIsLoadingPois(true);
    await dispatch(getRandomPois());
    setIsLoadingPois(false);
  }

  useEffect(() => {
    getSomePois();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    getAllRoutes();
    // eslint-disable-next-line
  }, [routesPage]);

  const handleRoutesScroll = (ev) => {
    const { scrollLeft, offsetWidth, scrollWidth } = ev.target;
    if (
      !isLoadingRoutes &&
      routesPage < paginationData.maxPages &&
      scrollLeft + offsetWidth >= scrollWidth - 10
    ) {
      setIsLoadingRoutes(true);
      setRoutesPage(routesPage + 1);
    }
  }

  return (
    <div className="home">
      Home(logo)
      <div>Explora Valencia</div>
      <div> Ver todas</div>
      <div className="show-routes" onScroll={handleRoutesScroll}>
        <Route isLoadingRoutes={isLoadingRoutes} />
      </div>
      <div>Categorías</div>
      <button>ejemplo1</button>  <button>ejemplo2</button>
      <div>Lugares que visitar</div>
      <div> Ver todos</div>
      <div className="show-pois">
        {isLoadingPois ?
          <Skeleton.Image style={{ height: "326px", width: "308px" }} />
          :
          <div className="pois"><Poi /></div>
        }
      </div>
    </div>
  );

}

export default Home;
