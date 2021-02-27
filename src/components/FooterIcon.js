import React from "react";

function FooterIcon(props) {
  return (
    <>
      <a
        className="social-icon-link"
        href={props.href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={props.label}
      >
        <i className={props.icon} />
      </a>
    </>
  );
}

export default FooterIcon;
