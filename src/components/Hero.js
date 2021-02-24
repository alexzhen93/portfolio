import React from "react";
import Button from "./Button";
import { Link as Link1 } from "react-scroll";
import Typewritter from "typewriter-effect";
import Image from "./images/img-home.png";
import "./Hero.css";
import "../App.css";

function Hero() {
  return (
    <div className="hero-container">
      <img className="hero-image" src={Image} />
      <h1>Hi, my name is Alex</h1>
      <div className="text">
        <Typewritter
          onInit={(typewritter) => {
            typewritter
              .changeDelay(85)
              .typeString("I'm an aspiring software engineer and")
              .pauseFor(500)
              .deleteChars(21)
              .typeString("web developer")
              .pauseFor(500)
              .deleteAll()
              .typeString("Let's connect!")
              .start();
          }}
        />
      </div>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          <Link1
            to="card"
            spy={true}
            smooth={true}
            offset={-80}
            duration={500}
          >
            <h4>GET TO KNOW ME</h4>
          </Link1>
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          <Link1
            to="contact"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <h4>
              CONTACT ME
              <i className="fas fa-address-book" />
            </h4>
          </Link1>
        </Button>
      </div>
    </div>
  );
}

export default Hero;
