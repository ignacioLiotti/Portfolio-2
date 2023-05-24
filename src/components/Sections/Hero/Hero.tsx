import Button from "@/components/atoms/Button/Button";
import IconButton from "@/components/atoms/IconButton/IconButton";
import { MultiSelectList } from "@/components/atoms/MultiSelect/MultiSelect";
import { Showcase } from "@/components/atoms/Showcase/Showcase";
import { TabSelector } from "@/components/atoms/TabSelector/TabSelector";
import { ToggleButton } from "@/components/atoms/Toggle/Toggle";
import Smily from "@/icons/Smily";
import ShowButton from "@/components/molecules/ShowButton.tsx/ShowButton";
import React, { forwardRef, ForwardedRef, useRef, ReactElement, useState, useEffect, CSSProperties } from "react";
import styles from "./Hero.module.css";
import ShowAlert from "@/components/molecules/ShowAlert/ShowAlert";
import MenubarDemo from "@/components/atoms/Menu/MenuDemo";
import CommandList, { Command } from "@/components/atoms/CommandList/CommandList";
import { motion } from "framer-motion";

interface HeroProps {
  forwardedRef: ForwardedRef<HTMLDivElement>;
}

const tabOptions = [
  { value: 'tab1', label: 'Looong' },
  { value: 'tab2', label: 'Short' },
  { value: 'tab3', label: 'And Awesome' },
];

const options = [
  { value: 'option1', label: 'Option 1', key : 'option1' },
  { value: 'option2', label: 'Option 2', key : 'option2' },
  { value: 'option3', label: 'Option 3', key : 'option3' },
  { value: 'option4', label: 'Option 4', key : 'option4' },
  { value: 'option5', label: 'Option 5', key : 'option5' },
  { value: 'option6', label: 'Option 6', key : 'option6' },
];

const commands: Command[] = [
  { name: 'Cut', shortcut: '⌘X' },
  { name: 'Copy', shortcut: '⌘C' },
  { name: 'Paste', shortcut: '⌘V' },
  { name: '', shortcut: '', isSeparator: true },
  { name: 'Undo', shortcut: '⌘Z' },
  { name: 'Redo', shortcut: '⌘Y' },
  { name: '', shortcut: '', isSeparator: true },
  { name: 'Print', shortcut: '⌘P' },
  { name: 'Reshape', shortcut: '⌘R' },
];

const Hero = forwardRef<HTMLDivElement, HeroProps>((props, ref) => {
  return (
    <section className={styles.hero} ref={props.forwardedRef}>

      <div className={styles.sticky}>
        <ParallaxWrapper speed={0.75} style={{marginTop:'-250px', height:'500px', zIndex:'-1'}} scale>
          <ButtonsAnThings></ButtonsAnThings>
        </ParallaxWrapper>
        <ParallaxWrapper speed={0.5} style={{display:'flex', flexDirection:'column', zIndex:'10'}}>
          <h1 className={styles.heading}>React Engineer for Great User Experiences</h1>
          <h2 className={styles.subHeading}>Full-stack developer with a focus on user experience. Specializes in creating balanced design and functional interfaces. Experience in project and resource management for exceptional front-end experiences.</h2>
        </ParallaxWrapper>
        <p className={styles.paragraph}></p>
        <span className={styles['light-blob-1']}></span>
        <span className={styles['light-blob-2']}></span>
        <span className={styles['light-blob-3']}></span>
      </div>

    </section>
  );
});

export default Hero;

import { useInView } from 'react-intersection-observer';

type ParallaxAnimationProps = {
  className?: string;
  children: React.ReactNode;
  index?: number;
  speed: number;
  scale?: boolean;
};

const ParallaxAnimation: React.FC<ParallaxAnimationProps> = ({ className, children, index = 0, speed, scale = false }) => {
  const delay = index * 0.2 + 0.7;
  const [offset, setOffset] = useState(0);
  console.log(offset,speed)

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const animationProps = useSpring({
    from: { opacity: 0, y: 20 },
    to: { opacity: inView ? 1 : 0, y: inView ? 0 : 20 },
    config: { tension: 170, friction: 26 },
    immediate: !inView,
    delay: inView ? delay * 1000 : 0,  // delay is in milliseconds
  });

  const parallaxProps = useSpring({
    transform: `translateY(${-offset * speed}px) scale(${scale ? 1 / (offset * speed / 300 + 1) : '1'})`,
  });

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <animated.div
      ref={ref}
      className={className}
      style={{
        opacity: animationProps.opacity,
        transform: animationProps.y.to((y) => `translate3d(0, ${y}px, 0)`),
        ...parallaxProps,
      }}
    >
      {children}
    </animated.div>
  );
};

const ButtonsAnThings = () => {
  return (
  <div className={styles.customGridLayout} >
      <ParallaxAnimation index={0} speed={0.75} className={styles.gridItem + " " + styles.gridItem1}>
        <Showcase>
          <Button type="secondary">All sort of thigs</Button>
        </Showcase>
      </ParallaxAnimation>
      <ParallaxAnimation index={1} speed={0.3} className={styles.gridItem + " " + styles.gridItem2}>
        <Showcase>
          <MultiSelectList options={options}></MultiSelectList>
        </Showcase>
      </ParallaxAnimation>
      <ParallaxAnimation index={2} speed={0.5} className={styles.gridItem + " " + styles.gridItem3}>
        <Showcase>
          <ToggleButton label="bolaaas" type="secondary" onToggle={(active) => console.log('Toggled:', active)} />
        </Showcase>
      </ParallaxAnimation>
      <ParallaxAnimation index={3} speed={0.2} className={styles.gridItem + " " + styles.gridItem4}>
        <Showcase>
          <TabSelector
            options={tabOptions}
            onTabChange={(value) => console.log('Tab changed:', value)}
          />
        </Showcase>
      </ParallaxAnimation>   
      <ParallaxAnimation index={4} speed={0.85} className={styles.gridItem + " " + styles.gridItem6}>
        <Showcase>
          <div className={styles.gridItem6Container}>
            <IconButton type="primary" size='small'>
              <Smily/>
            </IconButton>
            <IconButton type="secondary" size='small'>
              <Smily/>
            </IconButton>
            <IconButton type="tertiary" size='small'>
              <Smily/>
            </IconButton>
            
          </div>
        </Showcase>
      </ParallaxAnimation>
      <ParallaxAnimation index={5} speed={0.34} className={styles.gridItem + " " + styles.gridItem7}>
          <ShowAlert/>
      </ParallaxAnimation>
      <ParallaxAnimation index={6} speed={0.23} className={styles.gridItem + " " + styles.gridItem8}>
        <Showcase>
          <MenubarDemo></MenubarDemo>
        </Showcase>
      </ParallaxAnimation>
      <ParallaxAnimation index={7} speed={0.83} className={styles.gridItem + " " + styles.gridItem9}>
        <Showcase>
          <CommandList commands={commands} />
        </Showcase>
      </ParallaxAnimation>
      <ParallaxAnimation index={8} speed={0.12} className={styles.gridItem + " " + styles.gridItem5}>
        <ShowButton/>
      </ParallaxAnimation>
    </div>
  );
}



      
import { useSpring, animated,useTransition  } from 'react-spring';

type ParallaxWrapperProps = {
  children: ReactElement | ReactElement[];
  speed: number;
  scale?: boolean;
};

const ParallaxWrapper: React.FC<ParallaxWrapperProps> = ({ children, speed, style, scale=false }) => {
  const [offset, setOffset] = useState(0);
  const props = useSpring({ transform: `translateY(${-offset * speed}px) scale(${scale ? 1 / (offset * speed / 300 + 1)  : '1'})`,  ...style });

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <animated.div className={styles.parallax} style={props}>
      {children}
    </animated.div>
  );
};
