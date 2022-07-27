import React from "react";
import { Button, Result } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./NotFound.scss";
const NotFound = () => {
  return (
   
      <div className="error404">
        <div className="container">
          <div className="picture">
      
          </div>
          <div className="text">

            <span className="main404">404</span> <br/>
         La página que buscas <br/>no se encuentra.
            <button className="buttonBack"><Link to="/home">Volver al inicio</Link></button>
          </div>
        </div>
       
      </div>
    
  );
};

export default NotFound;
