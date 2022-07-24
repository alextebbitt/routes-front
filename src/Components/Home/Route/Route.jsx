import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Route.scss";
import { StarOutlined, ClockCircleOutlined, HeartOutlined,HeartFilled } from "@ant-design/icons";
import { addToWishlist, removeFromWishlist } from "../../../features/routes/routesSlice";

const Route = () => {
  const { routes } = useSelector((state) => state.routes);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const truncateAfterWord = (str, chars, placeholder = '...') =>  str.length < chars ? str : `${str.substr( 0, str.substr(0, chars - placeholder.length).lastIndexOf(" "))}${placeholder}`;
  const route = routes.map((route) => {
    console.log("routes", route._id)
    console.log("user", user);
    const isAlreadyInWishlist = user.user?.wishlist?.includes(route._id);
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

          <div className="btn">
            {isAlreadyInWishlist ? (
              <HeartFilled className="icon" onClick={() => dispatch(removeFromWishlist(route._id))}/>
              ) : (
                <HeartOutlined className="icon" onClick={() => dispatch(addToWishlist(route._id))} />
              )}
             </div>
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
          {truncateAfterWord(route.name,55)}</div>
        </div>
      </div>
    );
  });

  return <div className="container">{route}</div>;
};
export default Route;
