import React, { useState } from 'react';
import styles from './Toggle.module.css';

interface ToggleButtonProps {
  onToggle?: (active: boolean) => void;
  size?: 'small' | 'default' | 'large';
  type?: 'primary' | 'secondary' | 'tertiary' | 'transparent';
  label?: string;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ onToggle, size = 'default', type = 'primary', label }) => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive((prevState) => !prevState);
    if (onToggle) {
      onToggle(!active);
    }
  };

  return (
    <div className={styles.toggleContainer}>
      {label && <label htmlFor="toggle-button" className={styles.toggleLabel}>{label}</label>}
      <button
        id="toggle-button"
        className={`${styles.toggle} ${active ? styles.active : ''} ${styles[size]} ${styles[type]}`}
        onClick={handleToggle}
      >
        <span className={styles.toggleCircle}></span>
      </button>
    </div>
  );
};