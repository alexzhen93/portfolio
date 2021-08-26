import React from "react";
import { Link as Link1 } from "react-scroll";
import "./Footer.css";
import FooterIcon from "./FooterIcon";
import Rocket from "./images/Rocket.png";

function Footer() {
  return (
    <div className="footer-container" id="contact">
      <section className="footer-sub">
        <p className="footer-text">Feel free to contact me or just simply say "Hi!"</p>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="social-icons">
            <FooterIcon
              href="https://www.facebook.com/alexander.zhen/"
              label="Facebook"
              icon="fab fa-facebook-square"
            />
            <FooterIcon
              href="https://www.instagram.com/just.az_/"
              label="Instagram"
              icon="fab fa-instagram"
            />
            <FooterIcon
              href="https://github.com/alexzhen93"
              label="GitHub"
              icon="fab fa-github-square"
            />
            <FooterIcon
              href="https://www.linkedin.com/in/alexjpzhen/"
              label="LinkedIn"
              icon="fab fa-linkedin"
            />
            <FooterIcon
              href="mailto:jiapengzhen@outlook.com"
              label="E-Mail"
              icon="far fa-envelope"
            />
          </div>
        </div>
        <Link1
          className="rocket-to-top"
          activeClass="active-top"
          to="top"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <img className="rocket" src={Rocket} alt="rocket"/>
        </Link1>
        <small className="website-rights">Go to top</small>
        <small className="website-rights">Alex Zhen © 2021</small>
      </section>
    </div>
  );
}

export default Footer;
