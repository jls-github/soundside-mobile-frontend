import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import ServicesIndex from "./ServicesIndex";
import Slideshow from "./Slideshow";
import Navbar from "../components/Navbar";
import "../sunday-service.sass";
import BackgroundImage from "../../images/background_image.jpg";
import ConnectionCard from "./ConnectionCard.js";

const ChurchServiceContainer = () => {

  const location = useLocation();

  const router = () => {
    const path = location.pathname.split("/");
    if (path[2] === "connect") {
      return <ConnectionCard />;
    } else if (path[2]) {
      return <Slideshow serviceId={path[2]} />;
    } else {
      return <ServicesIndex />;
    }
  };

  return (
    <Fragment>
      <div className="sunday-service-container">
        <div className="sunday-service-background"></div>
        <img className="sunday-service-picture" src={BackgroundImage} alt="" />
        <Navbar />
        <div className="main-content-container">{router()}</div>
      </div>
    </Fragment>
  );
};

export default ChurchServiceContainer;
