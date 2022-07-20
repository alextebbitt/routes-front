import React from "react";
// import { notification, Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../features/auth/authSlice";
import {
  ThunderboltOutlined,
  HomeOutlined,
  CompassOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      {user ? (
        <nav>
        
            <div className="buttons">
              <div className="icon">
                <Link to="/home"><HomeOutlined /><div className="iconTitle">Home</div> </Link>        
              </div>
              <div className="icon">
                <Link to="/routes"><ThunderboltOutlined /><div  className="iconTitle"> Routes</div> </Link>        
              </div>
              <div className="icon">
                <Link to="/liked"> <HeartOutlined /><div  className="iconTitle">Favs</div> </Link>        
              </div>
              <div className="icon">
                <Link to="/nearby"> <CompassOutlined /><div  className="iconTitle"> Nearby</div> </Link>        
              </div>
              <div className="icon">
                <Link to="/profile"> <UserOutlined /><div  className="iconTitle">Profile</div> </Link>        
              </div>
            </div>
         
        </nav>
      ) : null}
    </>
  );
};

export default Header;
