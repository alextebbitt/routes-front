import React from 'react'
import {  useNavigate,Link } from "react-router-dom";
import "./Landing.scss"

const Landing = () => {
  return (
    <div className="landing">Landing
    <div className="pictureWall">
      <img src="https://i.imgur.com/TjLSq2l.jpg"  />
      <img src="https://i.imgur.com/TjLSq2l.jpg"  />
      <img src="https://i.imgur.com/TjLSq2l.jpg"  />
      <img src="https://i.imgur.com/TjLSq2l.jpg"  />
      <img src="https://i.imgur.com/TjLSq2l.jpg"  />
      <img src="https://i.imgur.com/TjLSq2l.jpg"  />
      
    </div>
             <img src="https://i.imgur.com/TjLSq2l.jpg" height="80px" alt="logo"></img>
        <div className="gif">
            <img src="https://c.tenor.com/b5ye9Sj0hXQAAAAM/valencia-awkward.gif"/>
        </div>
       <span>
                ¿Ya tienes cuenta?<Link to="/login">Conéctate</Link>
              </span>
    </div>
  )
}

export default Landing