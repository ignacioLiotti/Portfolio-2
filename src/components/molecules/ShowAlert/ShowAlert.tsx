import React, { useState } from 'react';
import { Showcase } from '@/components/atoms/Showcase/Showcase';
import { Pencil, Redo } from '@/icons';
import Alert from '@/components/atoms/Alert';
import styles from './ShowAlert.module.css';
import IconButton from '@/components/atoms/IconButton/IconButton';

const ShowAlert = () => {
  const [alertType, setAlertType] = useState< 'default' | 'success' | 'info' | 'warning' | 'error'>('default');
  const [alertStyle, setAlertStyle] = useState<'light' | 'dark' | 'transparent' | 'white'>('transparent');

  const cycleAlertType = () => {
    const types: ('default' | 'success' | 'info' | 'warning' | 'error')[] = ['default','success', 'info', 'warning', 'error'];
    const currentIndex = types.indexOf(alertType);
    setAlertType(types[(currentIndex + 1) % types.length]);
  };

  const cycleAlertStyle = () => {
    const styles: ('light' | 'dark' | 'transparent' | 'white')[] = ['light', 'dark', 'transparent', 'white'];
    const currentIndex = styles.indexOf(alertStyle);
    setAlertStyle(styles[(currentIndex + 1) % styles.length]);
  };

  return (
    <Showcase>
      <div className={styles.wrapper}>
        <div className={styles.buttons}>
          <IconButton onClick={cycleAlertType} size='smallest' type='transparent'><Redo/></IconButton>
          <IconButton onClick={cycleAlertStyle} size='smallest' type='transparent'><Pencil/></IconButton>
        </div>
        <Alert type={alertType} variation={alertStyle} LeftIcon>
          <b>Note: </b>This is an alert, please feel alerted.
        </Alert>
      </div>
    </Showcase>
  );
};

export default ShowAlert;
