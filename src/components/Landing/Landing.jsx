import React from 'react'
import {  useNavigate,Link } from "react-router-dom";
import "./Landing.scss"


const Landing = () => {
  return (
    // <div className="landing">Landing
    // <div className="pictureWall">
    //   <img src="https://i.imgur.com/TjLSq2l.jpg"  />
    //   <img src="https://i.imgur.com/TjLSq2l.jpg"  />
    //   <img src="https://i.imgur.com/TjLSq2l.jpg"  />
    //   <img src="https://i.imgur.com/TjLSq2l.jpg"  />
    //   <img src="https://i.imgur.com/TjLSq2l.jpg"  />
    //   <img src="https://i.imgur.com/TjLSq2l.jpg"  />
      
    // </div>
    //          <img src="https://i.imgur.com/TjLSq2l.jpg" height="80px" alt="logo"></img>
    //     <div className="gif">
    //         <img src="https://c.tenor.com/b5ye9Sj0hXQAAAAM/valencia-awkward.gif"/>
    //     </div>
    //    <span>
    //             ¿Ya tienes cuenta?<Link to="/login">Conéctate</Link>
    //           </span>

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