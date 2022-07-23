import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Route.scss";
import { Skeleton } from "antd";
import { StarOutlined, ClockCircleOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";

const Route = ({ isLoadingRoutes }) => {

  const { routes } = useSelector((state) => state.routes);

  const truncateAfterWord = (str, chars, placeholder = '...') => str.length < chars ? str : `${str.substr(0, str.substr(0, chars - placeholder.length).lastIndexOf(" "))}${placeholder}`;

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
      <div className="route" key={route.id}>
        <div className="routePicture">
          <Link to={"/route/" + route._id}>
            <img
              src={route.image}
              alt={route.name} />
          </Link>

          <div className="btn"> <HeartOutlined className="icon" /></div>
        </div>
        <div className="routeDescription">
          <div className="routeDetails">
            <div className="routeTag">
              {route.kind}
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
            {truncateAfterWord(route.name, 55)}</div>
        </div>
      </div>
    );
  });

  return <div className="container">
    {route}
    {isLoadingRoutes &&
      <div className="route" style={{ height: "290px" }}>
        <Skeleton.Image style={{ height: "184px", width: "184px" }} active />
      </div>
    }
    <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div>
  </div>;
};
export default Route;
