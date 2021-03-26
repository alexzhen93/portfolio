import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import Alex from "./images/Alex.png";
import Projects from "./images/Projects.png";
// import Projects from "./images/Line.png"

function Cards() {
  return (
    <div className="cards" id="card">
      <h1>Get To Know Me!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={Alex}
              text={`A little about me. 
              \nLearn more detail here `}
              label="About"
              path="/About"
            />
            <CardItem
              src={Projects}
              text={`A glance of my projects. 
              \nLearn more detail about the projects`}
              label="Projects"
              path="/Project"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
