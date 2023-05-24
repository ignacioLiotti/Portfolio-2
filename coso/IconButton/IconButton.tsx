import React from "react";
import styles from "./IconButton.css";
import Dropdown from "../../assets/icons/dropdown";

export interface IconButtonProps {
  className?: string;
  children: React.ReactNode;
  type?: "primary" | "secondary" | "tertiary" | "transparent";
  size?: "small" | "default";
  dropdown?: boolean;
  disabled?: boolean;
  href?: string;
}

const IconButton = ({ className, children, type = 'primary', size = 'default', dropdown = false, disabled = false, href,
}: IconButtonProps) => {

  const isDisabled = disabled ? 'disabled' : '';
  const CDSType = 'CDS-' + type;
  const CDSSize = 'CDS-' + size;

  const asLink = (
  <a
    className={`${styles.iconButton} + ${styles[type]} + ${styles[size]} + ${className} + ${styles[isDisabled]}  `}
    href={href}
  >
    {children}
    {dropdown && <div className={styles.dropdown}><Dropdown/></div>}
  </a>
  )

  const asButton = (
    // TODO: Add dropdown functionality when design is ready
    <button
      className={`${styles.iconButton} + ${styles[type]} + ${styles[size]} + ${className}`}
      disabled={disabled}
    >
      {children}
      {dropdown && <div className={styles.dropdown}><Dropdown/></div>}
    </button>
  );

  return (
    <>
      {href ? asLink : asButton}
    </>
  );
};

export default IconButton;