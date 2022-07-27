import React from "react";
import { Button, Result } from "antd";
import { HomeOutlined} from "@ant-design/icons";
import { Link} from "react-router-dom";
import "./NotFound.scss"; 
const NotFound = () => {
  return (
    <div>
      <div className="container">
        <Result
          className="antd"
          status="404"
          title="404"
          subTitle="Lo sentimos, la página no existe."
          extra={
            <Button className="button">
              <Link to="/home">
                <div><HomeOutlined/></div>
              </Link>
            </Button>
          }
        />

        {/* <img className="gif"
        src="https://freefrontend.com/assets/img/html-funny-404-pages/HTML-404-Error-Page.gif"
        alt="description of gif" */}

        {/* /> */}
      </div>
    </div>
  );
};

export default NotFound;
