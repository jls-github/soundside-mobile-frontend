import React, { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ServicesIndex from "./ServicesIndex";
import Slideshow from "./Slideshow";
import Navbar from "../components/Navbar";
import "../sunday-service.sass";
import BackgroundImage from "../../images/background_image.jpg";
import ConnectionCard from "./ConnectionCard.js";

const ChurchServiceContainer = () => {
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [deferredPrompt, setDeferredPrompt] = useState(null)

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

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Stash the event so it can be triggered later.
      setDeferredPrompt(e)
      // Update UI notify the user they can install the PWA
      setShowInstallPrompt(true)
      // Optionally, send analytics event that PWA install promo was shown.
      console.log(`'beforeinstallprompt' event was fired.`);
    });
  }, []);

  const handleClickInstall = async () => {
    setShowInstallPrompt(false)
    deferredPrompt.prompt()
    const { outcome } = await deferredPrompt.userChoice;
    // Optionally, send analytics event with outcome of user choice
    console.log(`User response to the install prompt: ${outcome}`);
    // We've used the prompt, and can't use it again, throw it away
    setDeferredPrompt(null);
  }

  return (
    <Fragment>
      <div className="sunday-service-container">
        <div className="sunday-service-background"></div>
        <img className="sunday-service-picture" src={BackgroundImage} alt="" />
        <Navbar />
        <div className="main-content-container">{router()}</div>
      </div>
      {showInstallPrompt && <button style={{position: "absolute", top: 0}} onClick={handleClickInstall}>Install</button>}
    </Fragment>
  );
};

export default ChurchServiceContainer;
