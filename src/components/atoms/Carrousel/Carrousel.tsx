import React, { ReactElement, useRef, useCallback, useEffect, useState } from 'react';
import { useSpring, animated } from 'react-spring';
import styles from './Carousel.module.css';

type CurvedCarouselProps = {
  slides: ReactElement[];
  radius?: number;
  visibleSlides?: number;
  baseVelocity?: number;
};

const CurvedCarousel: React.FC<CurvedCarouselProps> = ({
  slides,
  radius = 2700,
  visibleSlides = 5,
  baseVelocity = 5,
}) => {
  const [rotateY, setRotateY] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const dragging = useRef<boolean>(false);
  const dragStartX = useRef<number>(0);
  const dragStartRotationY = useRef<number>(0);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const lastScrollY = useRef<number>(window.scrollY);
  const handleMouseDown = useCallback((event: React.MouseEvent) => {
    dragging.current = true;
    dragStartX.current = event.clientX;
    dragStartRotationY.current = rotateY;
  }, [rotateY]);

  const handleMouseMove = useCallback(
    (event: MouseEvent) => {
      if (!dragging.current) return;
  
      const deltaX = event.clientX - dragStartX.current;
      const angleDelta = -(360 / (2 * Math.PI * radius)) * deltaX * baseVelocity ;
  
      setRotateY(dragStartRotationY.current + angleDelta);
    },
    [radius]
  );

  const handleMouseUp = useCallback(() => {
    dragging.current = false;
  }, []);

  useEffect(() => {
    const mouseMoveListener = (event: MouseEvent) => handleMouseMove(event);
    const mouseUpListener = () => handleMouseUp();

    document.addEventListener('mousemove', mouseMoveListener);
    document.addEventListener('mouseup', mouseUpListener);

    return () => {
      document.removeEventListener('mousemove', mouseMoveListener);
      document.removeEventListener('mouseup', mouseUpListener);
    };
  }, [handleMouseMove, handleMouseUp]);

  useEffect(() => {
    const handleScroll = () => {
      const deltaY = window.scrollY - lastScrollY.current;
      lastScrollY.current = window.scrollY;
      const angleDelta = -(360 / (2 * Math.PI * radius)) * deltaY * baseVelocity;

      if (wrapperRef.current && carouselRef.current) {
        const wrapperHeight = wrapperRef.current.getBoundingClientRect().bottom;
        const carouselBottom = carouselRef.current.getBoundingClientRect().bottom;

        if (carouselBottom + 500 < wrapperHeight) {
          setRotateY(prevRotateY => prevRotateY + angleDelta);
        } else {
          const newAngleDelta = -(360 / (2 * Math.PI * radius));
          setRotateY(prevRotateY => prevRotateY + newAngleDelta);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [radius, baseVelocity]);

  const { transform } = useSpring({
    from: { transform: `rotateY(0deg)` },
    to: { transform: `rotateY(${rotateY}deg)` },
    config: { tension: 280, friction: 60 }
  });

  const getSlideStyle = (index: number) => {
    const angle = 360 / visibleSlides * (index - 1);
    const radians = (Math.PI / 180) * angle;
    const x = radius * Math.sin(radians);
    const z = (-radius * (1 - Math.cos(radians))) + radius;
    return {
      transform: `translateX(${x}px) translateZ(${z}px) rotateY(${angle + 180}deg) scale(2.5)`,
    };
  };

  return (
    <div ref={wrapperRef} className={styles.stickySection}>
      <div className={styles.carouselWrapper}>
        <animated.div
          className={styles.carousel}
          ref={carouselRef}
          style={{ transform }}
          onMouseDown={handleMouseDown}
        >
          <div className={styles.slideContainer}>
            {slides.map((slide, index) => (
              <div key={index} className={styles.slide} style={getSlideStyle(index)}>
                {slide}
              </div>
            ))}
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default CurvedCarousel;

