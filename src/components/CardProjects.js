import React from "react";
import "./Cards.css";
import CardProjectItem from "./CardProjectItem";
import azProject from "./images/azProject.png";
import FindLoveNow from "./images/FindLoveNow.png";
import Form from "./images/Form.png";
import SplitIt from "./images/Split-It.png";
import WeatherApp from "./images/Weather-App.png";

function CardProjects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="projects__items">
            <CardProjectItem
              src={azProject}
              title="Personal website"
              text={`A site build with React,  JavaScript,  HTML,  and CSS to showcase all my projects,
              \nexpressing my passion for learning new technology and connecting with people.`}
              label="Portfolio"
              github="https://github.com/alexzhen93/Portfolio"
            >
              <div className="skill__info">
                <span className="skill react">React</span>
                <span className="skill js">JavaScript</span>
                <span className="skill html">HTML</span>
                <span className="skill css">CSS</span>
              </div>
            </CardProjectItem>
          </ul>
          <ul className="projects__items">
            <CardProjectItem
              src={FindLoveNow}
              title="FindLoveNow"
              text={`A collaborative group project to create a dating web application for users to find 
              \nmatches based on user set locations. FindLoveNow allows users to upload and delete  
              \nimages,  customize their matching preferences or use a blind match system for a blind
              \ndate,  and users able to chat and video call with match users.`}
              label="FindLoveNow"
              path="fas fa-external-link-alt"
              href="https://findlovenow.xyz"
              github="https://github.com/Fall-2020-Website-Design/FindLoveNow"
            >
              <div className="skill__info">
                <span className="skill react">React</span>
                <span className="skill node__js">Node.js</span>
                <span className="skill B">Bootstrap</span>
                <span className="skill css">CSS</span>
                <span className="skill seq">Sequelize</span>
                <span className="skill pg">PostgreSQL</span>
                <span className="skill aws">AWS</span>
              </div>
            </CardProjectItem>
          </ul>
          <ul className="projects__items">
            <CardProjectItem
              src={Form}
              title="Checkout form"
              text={`A simple and powerful checkout form using Bootstrap and CSS with front-end validation
              \nintegrated is both web and mobile-friendly.`}
              github="https://github.com/alexzhen93/Form"
            >
              <div className="skill__info">
                <span className="skill B">Bootstrap</span>
                <span className="skill css">CSS</span>
              </div>
            </CardProjectItem>
          </ul>
          <ul className="projects__items">
            <CardProjectItem
              src={SplitIt}
              title="Split-It"
              text={`A group collaborative project to create a bill splitting web application that allows  
              \nusers to split bills using their smartphone camera or by inputting the information
              \nnecessary. The web app also uses third-party API such as Google Map API and 
              \nTesseract OCR API,  OCR API,  a machine learning optical character recognition engine.    
              \nSplit-It also has other social functions like adding friends,  depositing virtual currency 
              \n(dummy currency),  and customizing personal settings.`}
              path="fas fa-external-link-alt"
              href="https://app-split-it.herokuapp.com"
              github="https://github.com/Skill-Knowledge-Technology/Split-It"
              >
              <div className="skill__info">
                <span className="skill react">React</span>
                <span className="skill node__js">Node.js</span>
                <span className="skill mt">Materialize</span>
                <span className="skill css">CSS</span>
                <span className="skill seq">Sequelize</span>
                <span className="skill pg">PostgreSQL</span>
                <span className="skill hk">Heroku</span>
              </div>
            </CardProjectItem>
          </ul>
          <ul className="projects__items">
            <CardProjectItem
              src={WeatherApp}
              title="Weather-App"
              text={`A simple weather application that is both web and mobile-friendly, use to check all 
              \nthe information about the weather. The site uses a third-party API to analyze and 
              \nforecast the weather by zip-code,  city,  or State.`}
              path="fas fa-external-link-alt"
              href="https://weather-app-az.herokuapp.com"
              github="https://github.com/alexzhen93/Weather-App"
              >
              <div className="skill__info">
                <span className="skill react">React</span>
                <span className="skill node__js">Node.js</span>
                <span className="skill B">Bootstrap</span>
                <span className="skill css">CSS</span>
                <span className="skill seq">Sequelize</span>
                <span className="skill pg">PostgreSQL</span>
                <span className="skill hk">Heroku</span>
              </div>
            </CardProjectItem>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CardProjects;
