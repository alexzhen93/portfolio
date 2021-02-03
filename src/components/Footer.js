import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className='footer-container' id="contact">
      <section className='footer-sub'>
        <p className='footer-heading'>
          Feel free to contact me for anything.
        </p>
        <p className='footer-text'>
          Or just simply say "Hi!"
        </p>
      </section>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons'>
            <a
              class='social-icon-link Facebook'
              href="https://www.facebook.com/alexander.zhen/"
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link Instagram'
              href="https://www.instagram.com/just.az_/"
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <a
              class='social-icon-link GitHub'
              href="https://github.com/alexzhen93"
              target='_blank'
              aria-label='GitHub'
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link LinkedIn'
              href="https://www.linkedin.com/in/jia-peng-zhen-6455a1170/"
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
            <a
              class='social-icon-link E-Mail'
              href="mailto:Jiapengzhen@outlook.com"
              target='_blank'
              aria-label='E-Mail'
            >
              <i class='far fa-envelope' />
            </a>
          </div>
        </div>
        <small class='website-rights'>Alex Zhen © 2021</small>
      </section>
    </div>
  );
}

export default Footer;
