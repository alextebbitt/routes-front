import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import "./Route.scss";
// import { StarOutlined, ClockCircleOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
// import { addToWishlist, removeFromWishlist } from "../../../features/auth/authSlice";
import { Button, Skeleton } from "antd";
import RouteCard from "./RouteCard/RouteCard";
const Route = ({ isLoadingRoutes }) => {

  const { routes } = useSelector((state) => state.routes);
  // const { user } = useSelector((state) => state.auth);
  // const dispatch = useDispatch();
  // const truncateAfterWord = (str, chars, placeholder = '...') => str.length < chars ? str : `${str.substr(0, str.substr(0, chars - placeholder.length).lastIndexOf(" "))}${placeholder}`;

  const route = routes.map((route) => {
    return <RouteCard key={route._id} route={route} />
    // const isAlreadyInWishlist = user.user?.wishlist?.includes(route._id);
    // const tag = route.tags?.map((tag, i) => (
    //   <>
    //     <Link key={tag + i + route._id} to={`/tag/${tag}`}>
    //       {tag}
    //     </Link>
    //     &nbsp;&nbsp;
    //   </>
    // ));

    // const handleWishlist = async () => {
    //   if (isAlreadyInWishlist) {
    //     await dispatch(removeFromWishlist(route._id));
    //   } else {
    //     await dispatch(addToWishlist(route._id));
    //   }
    // }

    // return (
    //   <div className="route" key={route.id}>
    //     <div className="routePicture">
    //       <Link to={"/route/" + route._id}>
    //         <img
    //           src={route.image}
    //           alt={route.name} />
    //       </Link>
    //       <Button className="btn">
    //         {isAlreadyInWishlist ?
    //           <HeartFilled className="icon" onClick={handleWishlist} />
    //           :
    //           <HeartOutlined className="icon" onClick={handleWishlist} />
    //         }
    //       </Button>
    //     </div>
    //     <div className="routeDescription">
    //       <div className="routeDetails">
    //         <div className="routeTag">
    //           {route.kind}
    //         </div>
    //         <div className="routeInfo">
    //           <div className="routeRating">
    //             <StarOutlined className="icon" /> <span className="value">4.5</span>
    //           </div>
    //           <div className="routeTime">
    //             <ClockCircleOutlined className="icon" />
    //             <span className="value">{route.duration}'</span>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="routeTitle">
    //         {truncateAfterWord(route.name, 55)}</div>
    //     </div>
    //   </div>
    // );
  });

  return <div className="container">
    {route.length ?
      route
      :
      !isLoadingRoutes ?
        <div className="search route ">
          Ninguna ruta satisface los criterios de búsqueda. ¡Prueba con otra!
        </div>
        : null
    }
    {isLoadingRoutes &&
      <div className="route" style={{ height: "290px" }}>
        <Skeleton.Image style={{ height: "184px", width: "184px" }} active />
      </div>
    }
    {route.lenght ? <div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    </div> : null}
  </div>;
};
export default Route;
