import React from "react";
import "./Footer.css";
import FooterIcon from "./FooterIcon";

function Footer() {
  return (
    <div className="footer-container" id="contact">
      <section className="footer-sub">
        <p className="footer-heading">Feel free to contact me for anything.</p>
        <p className="footer-text">Or just simply say "Hi!"</p>
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
              href="https://www.linkedin.com/in/jia-peng-zhen-6455a1170/"
              label="LinkedIn"
              icon="fab fa-linkedin"
            />
            <FooterIcon
              href="mailto:Jiapengzhen@outlook.com"
              label="E-Mail"
              icon="far fa-envelope"
            />
          </div>
        </div>
        <small className="website-rights">Alex Zhen © 2021</small>
      </section>
    </div>
  );
}

export default Footer;
