import React from 'react';
import { SchemeColor } from '../SchemeColor';
import './style.css';

export const Palette = ({
  name,
  image,
  attName,
  attUrl,
  colors,
  direction,
  description,
}) => (
  <>
    <div className="palette">
      <div
        className={
          direction === 'vertical'
            ? 'palette-scheme palette-scheme--vertical'
            : 'palette-scheme palette-scheme--horizontal'
        }
      >
        <img className="scheme-image" src={image} alt={name} />
        <div className="scheme-colors">
          {colors.map((color) => (
            <SchemeColor color={color} />
          ))}
        </div>
      </div>
      <div className="palette-info">
        <h2>{name}</h2>
        <p>{description}</p>

        <p>
          Photo by{attName}
          <a href={attUrl} target="_blank">
            &nbsp;
            {name}
          </a>
          .
        </p>
      </div>
    </div>
  </>
);
