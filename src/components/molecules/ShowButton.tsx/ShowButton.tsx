import Button from '@/components/atoms/Button/Button';
import { Showcase } from '@/components/atoms/Showcase/Showcase';
import React, { useState } from 'react';
import { Dropdown as iconDrop } from '@/icons';
import {Smily, Locked, Unlocked, Tick, Cross, Minus, Plus, Redo} from '@/icons';
import { ToggleButton } from '@/components/atoms/Toggle/Toggle';
import styles from './Show.module.css';
import IconButton from '@/components/atoms/IconButton/IconButton';
import ShowBut from '@/components/atoms/Button/ShowBut';

const ShowButton = () => {
  const [icon, setIcon] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [buttonType, setButtonType] = useState<'primary' | 'secondary' | 'tertiary' | 'transparent'>('primary');
  const [buttonSize, setButtonSize] = useState<'small' | 'default'>('default');

  const toggleIcon = () => {
    setIcon(!icon);
  };

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  const cycleType = () => {
    const types: ('primary' | 'secondary' | 'tertiary' | 'transparent')[] = ['primary', 'secondary', 'tertiary', 'transparent'];
    const currentIndex = types.indexOf(buttonType);
    setButtonType(types[(currentIndex + 1) % types.length]);
  };

  const cycleSize = () => {
    const sizes: ('small' | 'default')[] = ['small', 'default'];
    const currentIndex = sizes.indexOf(buttonSize);
    setButtonSize(sizes[(currentIndex + 1) % sizes.length]);
  };

  return (
    <Showcase>
      <div className={styles.wrapper}>
        <div className={styles.buttons}>
          <IconButton type="transparent" size='smaller' onClick={toggleIcon}>
            <Smily/>
          </IconButton>
          <IconButton type="transparent" size='smaller' onClick={toggleDropdown}>
            {dropdown ? <Cross/> : <Tick/>}
          </IconButton>
          <IconButton type="transparent" size='smaller' onClick={toggleDisabled}>
            {disabled ? <Locked/> : <Unlocked/>}
          </IconButton>
          <IconButton type="transparent" size='smaller' onClick={cycleSize}>
            {buttonSize === 'small' ? <Plus/> : <Minus/>}
          </IconButton>
          <Button onClick={cycleType} size='small' type='transparent'>Cycle Style <Redo/> </Button>
        </div>
        <ShowBut
          type={buttonType}
          size={buttonSize}
          Icon={icon}
          dropdown={dropdown}
          disabled={disabled}
        >
          Button
        </ShowBut>
      </div>
    </Showcase>
  );
};

export default ShowButton;
