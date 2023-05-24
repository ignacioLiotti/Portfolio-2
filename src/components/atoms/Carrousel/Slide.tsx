import React from 'react';
import styles from './Carousel.module.css';

const Slide = ({ slide, index, radius, visibleSlides }) => {
  const getSlideStyle = () => {
    const angle = 360 / visibleSlides * (index - 1);
    const radians = (Math.PI / 180) * angle;
    const x = radius * Math.sin(radians);
    const z = (-radius * (1 - Math.cos(radians))) + radius;
    return {
      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${angle + 180}deg) scale(2.5)`,
    };
  };

  return (
    <div className={styles.slide} style={getSlideStyle()}>
      {slide}
    </div>
  );
};

export default Slide;