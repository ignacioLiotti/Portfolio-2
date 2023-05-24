import React from "react";
import styles from "./IconButton.module.css";
import {Dropdown} from "@/icons";

interface IconButtonProps {
  className?: string;
  href?: string;
  children: React.ReactNode;
  type?: "primary" | "secondary" | "tertiary" | "transparent";
  size?: "smallest" | "smaller" | "small" | "default" | "large";
  dropdown?: boolean;
  disabled?: boolean;

  // react events
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseEnter?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseLeave?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseOver?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onMouseOut?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onFocus?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onBlur?: (event: React.FocusEvent<HTMLButtonElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onKeyUp?: (event: React.KeyboardEvent<HTMLButtonElement>) => void;
  onTouchStart?: (event: React.TouchEvent<HTMLButtonElement>) => void;
  onTouchMove?: (event: React.TouchEvent<HTMLButtonElement>) => void;
  onTouchEnd?: (event: React.TouchEvent<HTMLButtonElement>) => void;
  onTouchCancel?: (event: React.TouchEvent<HTMLButtonElement>) => void;

  // accesibility
  ariaLabel?: string;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
  ariaExpanded?: boolean;
  ariaHasPopup?: boolean;
  ariaControls?: string;
  ariaOwns?: string;
  ariaHidden?: boolean;
  ariaInvalid?: boolean;
  ariaRequired?: boolean;
  ariaChecked?: boolean;
  ariaPressed?: boolean;
  ariaSelected?: boolean;
}

const IconButton = ({ className, children, type = 'primary', size = 'default', dropdown = false, disabled = false, href,
  onClick, onMouseEnter, onMouseLeave, onMouseOver, onMouseOut, onFocus, onBlur, onKeyDown, onKeyUp, onTouchStart, onTouchMove, onTouchEnd, onTouchCancel,
  ariaLabel, ariaLabelledBy, ariaDescribedBy, ariaExpanded, ariaHasPopup, ariaControls, ariaOwns, ariaHidden, ariaInvalid, ariaRequired, ariaChecked, ariaPressed, ariaSelected
}: IconButtonProps) => {

  const isDisabled = disabled ? 'disabled' : '';

  if (href) {

  <a
    className={`${styles.iconButton} + ${styles[type]} + ${styles[size]} + ${className} + ${styles[isDisabled]}  `}
    href={href}

    // accesibility 
    aria-label={ariaLabel}
    aria-labelledby={ariaLabelledBy}
    aria-describedby={ariaDescribedBy}
    aria-expanded={ariaExpanded}
    aria-haspopup={ariaHasPopup}
    aria-controls={ariaControls}
    aria-owns={ariaOwns}
    aria-hidden={ariaHidden}
    aria-invalid={ariaInvalid}
    aria-required={ariaRequired}
    aria-checked={ariaChecked}
    aria-pressed={ariaPressed}
    aria-selected={ariaSelected}
  >
    {children}
    {dropdown && <div className={styles.dropdown}><Dropdown/></div>}
  </a>

  }


  return (

    // TODO: Add dropdown functionality when design is ready



    <button
      className={`${styles.iconButton} + ${styles[type]} + ${styles[size]} + ${className}`}
      disabled={disabled}

      // react events
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
      onKeyUp={onKeyUp}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onTouchCancel={onTouchCancel}

      // accesibility 
      aria-label={ariaLabel}
      aria-labelledby={ariaLabelledBy}
      aria-describedby={ariaDescribedBy}
      aria-expanded={ariaExpanded}
      aria-haspopup={ariaHasPopup}
      aria-controls={ariaControls}
      aria-owns={ariaOwns}
      aria-hidden={ariaHidden}
      aria-invalid={ariaInvalid}
      aria-required={ariaRequired}
      aria-checked={ariaChecked}
      aria-pressed={ariaPressed}
      aria-selected={ariaSelected}
    >
      <div>
        {children}
      </div>
      
      {dropdown && <div className={styles.dropdown}><Dropdown/></div>}
    </button>

    
    
  );
};

export default IconButton;