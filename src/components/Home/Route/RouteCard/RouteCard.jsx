import { Button } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { StarOutlined, ClockCircleOutlined, HeartOutlined, HeartFilled } from "@ant-design/icons";
import { addToWishlist, removeFromWishlist } from "../../../../features/auth/authSlice";

const RouteCard = ({ route }) => {

  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [wishlisting, setWishlisting] = useState(false);

  const isAlreadyInWishlist = user.user?.wishlist?.includes(route._id);

  const truncateAfterWord = (str, chars, placeholder = '...') => str.length < chars ? str : `${str.substr(0, str.substr(0, chars - placeholder.length).lastIndexOf(" "))}${placeholder}`;

  const handleWishlist = async () => {
    setWishlisting(true);
    if (isAlreadyInWishlist) {
      await dispatch(removeFromWishlist(route._id));
    } else {
      await dispatch(addToWishlist(route._id));
    }
    setWishlisting(false);
  }

  return (
    <div className="route" key={route.id}>
      <div className="routePicture">
        <Link to={"/route/" + route._id}>
          <img
            src={route.image}
            alt={route.name} />
        </Link>
        <Button className="btn"
          icon={isAlreadyInWishlist ? <HeartFilled /> : <HeartOutlined />}
          onClick={handleWishlist}
          loading={wishlisting}
        />
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
  )
}

export default RouteCard;