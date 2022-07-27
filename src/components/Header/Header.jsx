import React from "react";
import { useLocation } from "react-router";
// import { notification, Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../features/auth/authSlice";
import {
  SearchOutlined,
  BulbOutlined,
  HomeOutlined,
  CompassOutlined,
  HeartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const { pathname } = useLocation();
  const { user } = useSelector((state) => state.auth);
  return (
    <>
      {user ? (
        <nav>

            <div className="buttons">
              <div className={
                    pathname == "/home" ? "icon selected" : "icon"
                  }>
                <Link to="/home"><HomeOutlined /><div className="iconTitle">Inicio</div> </Link>
              </div>
              {/* <div className="icon">
                <Link to="/routes"><SearchOutlined /><div  className="iconTitle"> Buscar</div> </Link>
              </div> */}
              <div className={
                    pathname == "/liked" ? "icon selected" : "icon"
                  }>
                <Link to="/liked"> <HeartOutlined /><div  className="iconTitle">Favs</div> </Link>
              </div>
              <div className={
                    pathname == "/nearby" ? "icon selected" : "icon"
                  }>
                <Link to="/nearby"> <CompassOutlined /><div  className="iconTitle"> Cerca</div> </Link>
              </div>
              <div className={
                    pathname == "/suggest" ? "icon selected" : "icon"
                  }>
                <Link to="/suggest"><BulbOutlined /><div  className="iconTitle">Idea</div> </Link>
              </div>
              <div className={
                    pathname == "/profile" ? "icon selected" : "icon"
                  }>
                <Link to="/profile"> <UserOutlined /><div  className="iconTitle">Perfil</div> </Link>
              </div>
            </div>

        </nav>
      ) : null}
    </>
  );
};

export default Header;
