import React from 'react';
import './BeyondCode.css';
import sunsetPhoto from './../images/personals/rhode-island-2024.jpg';
import walkPhoto from './../images/personals/cambridge-walk.jpg';

const photos = [
  { src: sunsetPhoto, alt: 'Yash at sunset on the coast in Rhode Island', caption: 'Rhode Island, 2024' },
  { src: walkPhoto, alt: 'Yash with an umbrella on a wooded trail in Cambridge', caption: 'Somewhere in Cambridge' },
];

const interests = ['🐱 Cat person', '🌌 Sky watcher', '🌆 Evening walks'];

function BeyondCode() {
  return (
    <section id="beyond-the-code" className="beyond-code">
      <h2>Beyond the Code</h2>
      <div className="beyond-code-container">
        <div className="beyond-code-photos">
          {photos.map(({ src, alt, caption }) => (
            <figure className="beyond-code-photo" key={caption}>
              <img src={src} alt={alt} loading="lazy" />
              <figcaption>{caption}</figcaption>
            </figure>
          ))}
        </div>
        <div className="beyond-code-text">
          <p>
            Off the clock, I'm a cat person, a sky watcher, and never one to
            skip an evening walk, whether it ends at a sunset on the coast or on a rainy trail in Cambridge.
          </p>
          <div className="interest-chips">
            {interests.map((interest) => (
              <span className="interest-chip" key={interest}>{interest}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BeyondCode;
