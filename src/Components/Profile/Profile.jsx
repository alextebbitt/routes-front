import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import { notification } from "antd";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    notification.success({ message: "logged out successfully" });
    navigate("/login");
  };

  return (
    <div>
      <h1>Profile</h1>
      <div>Name: {user.user.name}</div>
      <div>Email: {user.user.email}</div>
      <div>Role: {user.user.role}</div>
      {user.user.role === "admin" ? (
                <div>
                  <Link to="/admin">Admin</Link>
                </div>
              ) : (
                ""
              )}

<div>
                <Link to="/" onClick={onLogout}>
                  Cerrar Sesión 
                </Link>
              </div>
    </div>
  )
}

export default Profile