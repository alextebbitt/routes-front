import React from 'react'
import {  useNavigate,Link } from "react-router-dom";
import "./Landing.scss"


const Landing = () => {
  return (
    <div className="main-container">
      <h1 className="h1title">Routes</h1>
      <div className="gif">
        <img
          className="gif-image"
          src="https://c.tenor.com/b5ye9Sj0hXQAAAAM/valencia-awkward.gif"
        />
      </div>
      <span className="buttons">
        <button className="button">
          ¿Ya tienes cuenta?<Link to="/login">Conéctate</Link>
        </button>
        <button className="button">
          ¿No tienes cuenta?<Link to="/register">Regístrate</Link>
        </button>
      </span>
      <div className='image-route-div'>
        <img
          className="image-route"
          src="https://zenduwork.com/wp-content/uploads/2022/06/routing-pointa-ppointb.png"
          height="300px"
          alt="logo"
        ></img>
      </div>
    </div>
  );
}

export default Landing

//https://chargemap-blog.s3.amazonaws.com/uploads/2019/05/Illus-blog-nouvel-iti-free-EN.jpg