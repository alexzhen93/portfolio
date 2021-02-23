import React from "react";
import "./Cards.css";
import CardProjectItem from "./CardProjectItem";
import azProject from "./images/azProject.png";
import FindLoveNow from "./images/FindLoveNow.png";
import SplitIt from "./images/Split-It.png";
import Alex from "./images/Alex.png";

function CardProjects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="projects__items">
            <CardProjectItem
              src={azProject}
              text={`Personal website 
              \nA site build with React to showcase all my personal projects, expressing my passion
              \non learning new technology and connecting with people`}
              label="Portfolio"
              //   href="http://findlovenow.xyz"
              href2="https://github.com/alexzhen93/Portfolio"
            >
              <div className="skill__info">
                <span className="skill react">React</span>
                <span className="skill js">JavaScript</span>
                <span className="skill css">CSS</span>
              </div>
            </CardProjectItem>
          </ul>
          <ul className="projects__items">
            <CardProjectItem
              src={FindLoveNow}
              text={`Hi, my name is Alex.
              \nLearn more detail about me
              `}
              label="FindLoveNow"
              path="fas fa-external-link-alt"
              href="http://findlovenow.xyz"
              href2="https://github.com/Fall-2020-Website-Design/FindLoveNow"
            >
              <div className="skill__info">
                <span className="skill react">React</span>
                <span className="skill node__js">Node.js</span>
                <span className="skill B">Bootstrap</span>
                <span className="skill css">CSS</span>
                <span className="skill pg">PostgreSQL</span>
              </div>
            </CardProjectItem>
          </ul>
          <ul className="projects__items">
            <CardProjectItem
              src={SplitIt}
              text={`A glance of my projects.
              \nLearn more detail about the projects
              `}
              href="https://app-split-it.herokuapp.com"
            />
          </ul>
          <ul className="projects__items">
            <CardProjectItem
              src={SplitIt}
              text={`A glance of my projects. 
                        \nLearn more detail about the projects
                        `}
              href="https://app-split-it.herokuapp.com"
            />
          </ul>
          <ul className="projects__items">
            <CardProjectItem
              src={SplitIt}
              text={`A glance of my projects. 
                        \nLearn more detail about the projects
                        `}
              href="https://weather-app-az.herokuapp.com"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardProjects;
