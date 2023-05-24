import React from 'react';
import styles from './Button.module.css';
import  {Smily} from '@/icons';
import  {Dropdown as DropwdownIcon} from '@/icons';
import Dropwdown from '../Dropdown/Dropdown';
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import Button from './Button';

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  type?: 'primary' | 'secondary' | 'tertiary' | 'transparent';
  size?: 'small' | 'default' | 'large';
  Icon?: boolean;
  dropdown?: boolean;
  disabled?: boolean;
  href?: string;
  [x: string]: any;
}

const ShowBut: React.FC<ButtonProps> = ({
  className = '',
  children,
  type = 'primary',
  size = 'default',
  dropdown = false,
  disabled = false,
  href = '',
  Icon,
  ...rest
}) => {
  const buttonClasses = [
    styles.Button,
    styles[type],
    styles[size],
    styles[className],
  ].join(' ');

  const dropdownWrapperClasses = [
    styles.dropdownWrapper,
    dropdown ? styles.visible : '',
  ].join(' ');

  const asButton = (
    <button
      className={buttonClasses}
      disabled={disabled}
      style={{transform:'scale(1.3)'}}
      {...rest}
    >
      {Icon && <div className={ styles.iconWrapper }><Smily/></div>}
      {children}
      {dropdown && <div className={styles.dropWrapper}><DropwdownIcon/></div>}
    </button>
  );

  const asDropdown = (
    <Dropwdown
      trigger={asButton}
      contentProps={{
        
      }}
      content={
        <>
          <DropdownMenu.Item>
            <Button type="transparent" className={styles.listItem}> Hi! </Button>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Button type="transparent" className={styles.listItem}> This is </Button>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Button type="transparent" className={styles.listItem}> A dropdown list! </Button>
          </DropdownMenu.Item>
        </>
      }
    />
  );
  return (dropdown ? asDropdown : asButton) ;
};

export default ShowBut;