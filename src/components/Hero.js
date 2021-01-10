import React from "react";
import Button from "./Button";
import Video from "./videos/video-3.mp4"
import "./Hero.css";
import "../App.css";


function Hero() {
  return (
    <div className="hero-container">
      <video src={Video} autoPlay loop muted/>
      <h1>Welcome</h1>
      <p>to NYC</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          GET STARTED
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          My Resume <i className="far fa-file"/>
        </Button>
      </div>
    </div>
  );
}

export default Hero;
