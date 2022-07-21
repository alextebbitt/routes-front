import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Route.scss";
import { StarOutlined, ClockCircleOutlined, HeartOutlined,HeartFilled } from "@ant-design/icons";

const Route = () => {
  const { routes } = useSelector((state) => state.routes);

  const truncateAfterWord = (str, chars, placeholder = '...') =>  str.length < chars ? str : `${str.substr( 0, str.substr(0, chars - placeholder.length).lastIndexOf(" "))}${placeholder}`;


  const route = routes.map((route) => {
    console.log("ruta", route);
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
            <img 
            src={route.image} 
            alt={route.name} />
          </Link>
          <div className="like"> <HeartOutlined className="icon"/></div>
        </div>
<<<<<<< HEAD
        <div className="routeTitle">
          <h2>{route.name}</h2>
=======
        <div className="routeDescription">
          <div className="routeDetails">
            <div className="routeTag">
                {route.tags[0]}
                </div>
            <div className="routeInfo">
              <div className="routeRating">
                <StarOutlined className="icon" /> <span className="value">4.5</span>
              </div>
              <div className="routeTime">
                <ClockCircleOutlined className="icon" />
                <span className="value">{route.duration}'</span>
              </div>
            </div>
          </div>
          <div className="routeTitle">
          {truncateAfterWord(route.name,55)}</div>
>>>>>>> develop
        </div>
      </div>
    );
  });

  return <div className="container">{route}</div>;
};
export default Route;
