import React from "react";
// import { notification, Avatar } from "antd";
import { useDispatch, useSelector } from "react-redux";
// import { logout } from "../../features/auth/authSlice";
import { LogoutOutlined, HomeOutlined,CompassOutlined,HeartOutlined,UserOutlined } from "@ant-design/icons";
import { Link, useNavigate } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);

  // const onLogout = (e) => {
  //   e.preventDefault();
  //   dispatch(logout());
  //   notification.success({ message: "logged out successfully" });
  //   navigate("/login");
  // };

  return (
    <nav>
      <div className="bottomNav">
        {/* <img src="" height="80px" alt="logo"></img> */}
        <div className="headerstuff">
        {user ? (
              <>
          <span>
            <Link to="/home">
              <HomeOutlined />
            </Link>
          </span>
      
              <span>
                <Link to="/routes">Routes</Link>
              </span>
              {/* <span>
                <Link to="/" onClick={onLogout}>
                  {<LogoutOutlined />}
                </Link>
              </span> */}
              <span>
              <Link to="/liked">Favs
              <HeartOutlined />
              </Link>
              </span>
              <span>
              <Link to="/nearby">Nearby
              <CompassOutlined />
              </Link>
              </span>
              <span>
                <Link to="/profile">
                <UserOutlined />
                </Link>
              </span>
              {/* {user.user.role === "admin" ? (
                <span>
                  <Link to="/admin">Admin</Link>
                </span>
              ) : (
                ""
              )} */}
            </>
          ) : (
            <>
              {/* <span>
                <Link to="/login">Login</Link>
              </span>
              <span>
                <Link to="/register">Register</Link>
              </span> */}
              {null}
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Header;
