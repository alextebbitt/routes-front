import React from "react";
import { Button, Result } from "antd";
import "./NotFound.scss"; 
const NotFound = () => {
  return (
    <div>
      <div className="container">
        <Result
          className="antd"
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={<Button type="primary">Back Home</Button>}
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
