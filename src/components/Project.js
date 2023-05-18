import React from 'react';

function Project({ imgSrc, imgAlt, title, description }) {
  return (
    <div className="project">
      <img src={imgSrc} alt={imgAlt} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default Project;
