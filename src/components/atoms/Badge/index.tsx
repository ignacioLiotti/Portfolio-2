import React from 'react';
import styles from './Badge.module.css';
import {
  CheckCircle,
  ExclamationCircle_1,
  InfoCircle,
  LightBulb,
  TimesCircle_1,
} from '../../assets/icons';

type Type = 'label' | 'iconLabel' | 'noBackground' | 'icon' | 'dot';
type Shape = 'circle' | 'square';
type Color = 'default' | 'info' | 'success' | 'warning' | 'error';
type Value = 'light' | 'dark';
type Size = 'xSmall' | 'small' | 'medium' | 'large';

interface BadgeProps {
  label: string;
  type?: Type;
  shape?: Shape;
  color?: Color;
  value?: Value;
  size?: Size;
}

export default function Badge({
  label,
  type = 'label',
  shape = 'circle',
  color = 'default',
  value = 'light',
  size = 'medium',
}: BadgeProps) {
  const hasLabel =
    type === 'label' || type === 'iconLabel' || type === 'noBackground';

  const hasIcon =
    type === 'icon' || type === 'iconLabel' || type === 'noBackground';

  return (
    <div
      className={`
       ${styles.main}
       ${styles[type]}  
       ${styles[shape]} 
       ${styles[color]} 
       ${styles[value]} 
       `}>
      {hasIcon && <BadgeIcon color={color} hasLabel={hasLabel} size={size} />}
      {hasLabel && (
        <span className={`${styles.textLabel} ${styles[size]}`}>{label}</span>
      )}
    </div>
  );
}

interface BadgeIconProps {
  color: Color;
  size: Size;
  hasLabel: boolean;
}

function BadgeIcon({ color, size, hasLabel }: BadgeIconProps) {
  return (
    <div
      className={`${styles.iconContainer} 
          ${hasLabel && styles.iconWithLabel}`}>
      {color === 'default' ? (
        <LightBulb className={styles[size]} />
      ) : color === 'info' ? (
        <InfoCircle className={styles[size]} />
      ) : color === 'success' ? (
        <CheckCircle className={styles[size]} />
      ) : color === 'warning' ? (
        <ExclamationCircle_1 className={styles[size]} />
      ) : color === 'error' ? (
        <TimesCircle_1 className={styles[size]} />
      ) : (
        <></>
      )}
    </div>
  );
}
