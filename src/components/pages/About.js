import React from "react";
import alex_bw from "../images/alex_bw.png";
import "../../App.css";
import "./About.css";

const skills = [
  "React",
  "JavaScript",
  "Node.js",
  "Python",
  "HTML",
  "CSS",
  "Google Cloud Platform",
  "PostgresSQL",
];

function About() {
  return (
    <div id="top" className="about">
      <h1>About</h1>
      <div className="about__container">
        <div className="about__wrapper">
          <img className="responsive" src={alex_bw} alt="alex-bw" />
          <p>
            <em className="em_p">Introduction:</em>
            <br />
            Hello! My name Jia Peng Zhen, or you can just call me Alex. I aspire
            to become a software engineer and web developer
            <br />
            <br />
            <em className="em_p">Education:</em>
            <br />
            I graduated in 2020 from The City College of New York, where I
            studied Computer Science.
            <br />
            <br />
            <em className="em_p">Work experience:</em>
            <br />
            I currently don't have experience in the software engineer industry,
            but I'm willing to learn and take my skills to the next level.
            <br />
            <br />
            <em className="em_p">
              Technologies I've been working with recently:
            </em>
            <br />
            <ul className="skills-list">
              {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
            </ul>
            <br />
            <em className="em_p">A little more about me:</em>
            <br />I was born and raised in Venezuela. Before coming to the
            United States, I studied in China for a few years. This allows me to
            gain a deeper understanding of different cultures and a new global
            perspective on cultural and social values. Besides coding, I enjoy
            playing various sports in my free time. During the summer, I play
            competitive
            <a
              className="nine-man"
              href="https://www.9-man.com"
              target="_blank"
              rel="noreferrer noopener"
            >
              <em> 9-man </em>
            </a>
            volleyball.
            <br />
            <br />I am passionate about learning new things and expanding my
            knowledge. In my opinion, learning is an important aspect of life.
            If you wish to learn more about me, feel free to reach out and
            connect. Thank you for visiting my site!
          </p>
        </div>
        <div className="quote__wrapper">
          <figure>
            <blockquote className="quote">
              "Wisdom is not a product of schooling but of the lifelong attempt
              to acquire it."
            </blockquote>
            <figure className="source">— Albert Einstein</figure>
          </figure>
        </div>
      </div>
    </div>
  );
}

export default About;
