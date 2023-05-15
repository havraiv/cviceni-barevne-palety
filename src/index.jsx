import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { palettes } from './palettes.js';
import { Palette } from './Palette';
const App = () => {
  return (
    <div className="container">
      <header>
        <h1>Barevné palety</h1>
      </header>
      <main>
        {palettes.map((color) => (
          <Palette
            key={color.name}
            name={color.name}
            image={color.image}
            attName={color.attribution.name}
            attUrl={color.attribution.url}
            colors={color.colors}
            direction={color.direction}
            description={color.description}
          />
        ))}
      </main>
      <footer>
        <p>Czechitas, Digitální akademie: Web</p>
      </footer>
    </div>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
