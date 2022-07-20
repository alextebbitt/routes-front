import React from 'react'
import {  useNavigate,Link } from "react-router-dom";


const Landing = () => {
  return (
    <div>Landing
             <img src="" height="80px" alt="logo"></img>
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