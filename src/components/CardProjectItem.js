import React from "react";

function CardProjectItem(props) {
  return (
    <>
      <li className="cards__item">
        <div className="cards__item__link">
          <div className="projects__item__pic-wrap" data-category={props.label}>
            <img
              src={props.src}
              alt="projects"
              className="projects__item__img"
            />
          </div>
          <div className="projects-links">
            <a className="projects-icon" href={props.href} target="_blank" rel="noreferrer noopener">
              <i className={props.path} />
            </a>
            <a className="projects-icon" href={props.github} target="_blank" rel="noreferrer noopener">
              <i className="fab fa-github-square" />
            </a>
          </div>
          <div className="projects__item__info">
            <h4 className="projects__title">{props.title}</h4>
            <p className="projects__item__text">{props.text}</p>
          </div>
          {props.children}
        </div>
      </li>
    </>
  );
}

export default CardProjectItem;
