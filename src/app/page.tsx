'use client';

import Hero from '@/components/Sections/Hero/Hero';
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '../components/molecules/NavBar/Navbar'
import styles from './page.module.css';
import Carousel from '@/components/atoms/Carrousel/Carrousel';
import Grid, {GridItem} from '@/components/molecules/Grid/Grid';
import { Parallax } from '@react-spring/parallax';

const Page = () => {
  const [activeSection, setActiveSection] = useState('hero');

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };

  const heroRef = useRef<HTMLElement | null>(null);
  const infoRef = useRef<HTMLElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const contactRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    if (heroRef.current) observer.observe(heroRef.current);
    if (infoRef.current) observer.observe(infoRef.current);
    if (projectsRef.current) observer.observe(projectsRef.current);
    if (contactRef.current) observer.observe(contactRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  const RedComponent: React.FC = ({num}) => (
    <div style={{ width: '100%', height: '100%', backgroundColor: 'royalblue' }}>num</div>
  );

  const slides = Array.from({ length: 10 }, (i) => <RedComponent num={i} />);

  return (
    <main className={styles.main}>

      <Navbar activeSection={activeSection} />
      <Hero forwardedRef={heroRef}/>
      <section id="info" className={styles.info} ref={infoRef}>
        <Carousel slides={slides} visibleSlides={8} />
      </section>
      <section id="section" ref={projectsRef}>
        <Grid>
          <GridItem colSpan={1} rowSpan={1}>
            <div style={{ width: '100%', height: '100%', color: 'white' }}>1</div>
          </GridItem>
          <GridItem colSpan={3} rowSpan={2}>
            <div style={{ width: '100%', height: '100%', color: 'white' }}>3</div>
          </GridItem>
          <GridItem colSpan={1} rowSpan={2}>
            <div style={{ width: '100%', height: '100%', color: 'white' }}>4</div>
          </GridItem>
          <GridItem colSpan={2} rowSpan={1}>
            <div style={{ width: '100%', height: '100%', color: 'white' }}>2</div>
          </GridItem>
          <GridItem colSpan={3} rowSpan={2}>
            <div style={{ width: '100%', height: '100%', color: 'white' }}>3</div>
          </GridItem><GridItem colSpan={3} rowSpan={2}>
            <div style={{ width: '100%', height: '100%', color: 'white' }}>3</div>
          </GridItem>
          <GridItem colSpan={1} rowSpan={2}>
            <div style={{ width: '100%', height: '100%', color: 'white' }}>4</div>
          </GridItem>
          <GridItem colSpan={1} rowSpan={2}>
            <div style={{ width: '100%', height: '100%', color: 'white' }}>4</div>
          </GridItem>
          <GridItem colSpan={1} rowSpan={3}>
            <div style={{ width: '100%', height: '100%', color: 'white' }}>5</div>
          </GridItem><GridItem colSpan={3} rowSpan={2}>
            <div style={{ width: '100%', height: '100%', color: 'white' }}>3</div>
          </GridItem>
          <GridItem colSpan={1} rowSpan={2}>
            <div style={{ width: '100%', height: '100%', color: 'white' }}>4</div>
          </GridItem>

        </Grid>
      </section>
      <section id="section" ref={contactRef}>
        Contact Section
      </section>
    </main>
  );
};

export default Page;