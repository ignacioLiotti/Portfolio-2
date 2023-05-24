import React from 'react';
import styles from './Alert.module.css';
import {
  CheckCircleLite,
  ExclamationCircleLite,
  InfoCircleLite,
  LightBulb,
  TimesCircleLite,
} from '@/icons';
export interface AlertProps {
  className?: string;
  children: React.ReactNode;
  type?: 'default' | 'info' | 'success' | 'warning' | 'error';
  variation?: 'light' | 'dark' | 'transparent' | 'white';
  width?: 'default' | number | 'full';
  LeftIcon?: boolean;
  RightIcon?: boolean;
}

const Alert = ({
  className,
  children,
  type = 'default',
  LeftIcon,
  RightIcon,
  variation = 'light',
  width = 'default', 
}: AlertProps) => {
  const CDSType = 'CDS-' + type;
  const CDSVariation = 'CDS-' + variation;

  const Icon = () => {
    switch (type) {
      case 'default':
        return <LightBulb />;
      case 'info': 
        return <InfoCircleLite />;
      case 'success':
        return <CheckCircleLite />;
      case 'warning':
        return <ExclamationCircleLite />;
      case 'error':
        return <TimesCircleLite />;
    }
  };

  const definedWidth = (width: any) => {
    switch (width) {
      case 'default':
        return 'max-content';
      case 'full':
        return '100%';
      default:
        return width;
    }
  };

  return (
    <div
      className={`${styles['CDS-Alert']} + ${styles[CDSVariation]} + ${styles[CDSType]} + ${className}`}
      style={{ width: definedWidth(width) }}
      >
      {LeftIcon && (
        <div className={styles['CDS-icon']}>
          <Icon />
        </div>
      )}
      <div className={styles['CDS-content']}>{children}</div>
      {RightIcon && (
        <div className={styles['CDS-icon']}>
          <Icon />
        </div>
      )}
    </div>
  );
};

export default Alert;
