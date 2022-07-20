import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Route.scss";

const Route = () => {
  const { routes } = useSelector((state) => state.routes);
  const route = routes.map((route) => {
    const tag = route.tags?.map((tag, i) => (
      <>
        <Link key={tag + i + route._id} to={`/tag/${tag}`}>
          {tag}
        </Link>
        &nbsp;&nbsp;
      </>
    ));

    return (
      <div className="card" key={route.id}>
        <div className="routePicture">
          <Link to={"/route/" + route._id}>
            {" "}
            <img src={route.image} alt={route.name} />
          </Link>
        </div>
        <div clasName="routeTitle">
          <h2>{route.name}</h2>
        </div>
        <div className="routeField">
            <span> Más Info</span>
        </div>
        <div className="routeTime">DURATION: {route.duration}</div>
      </div>
    );
  });

  return <div className="container">{route}</div>;
};
export default Route;
