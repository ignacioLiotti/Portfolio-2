import React from 'react';
import styles from './Showcase.module.css';

interface ShowcaseBackgroundProps {
  children: React.ReactNode;
}

export const Showcase: React.FC<ShowcaseBackgroundProps> = ({
  children,
}) => {
  return (
    <div className={styles.showcaseBackground}>
      {children}
    </div>
  );
};