import {Dropdown} from "@/icons";
import Link from "next/link";
import React from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  type?: "primary" | "secondary" | "tertiary" | "transparent" | "blue" | "selection";
  size?: "small" | "default" | "large";
  width?: "grow" | "shrink";
  Icon?: any;
  dropdown?: boolean;
  disabled?: boolean;
  href?: string;
  [x: string]: any;
}

const Button = ({
  className,
  children,
  type = "primary",
  size = "default",
  width = "shrink",
  dropdown = false,
  disabled = false,
  href = "",
  Icon,
  ...rest
}: ButtonProps) => {
  const asButton = (
    <button
      className={`${styles["Button"]} + ${styles[type]} + ${styles[size]} + ${className}`}
      disabled={disabled}
      {...rest}
    >
      {Icon && <div className={styles["dropdown"]}>{Icon}</div>}
      {children}
      {dropdown && (
        <div className={styles["dropdown"]}>
          <Dropdown />
        </div>
      )}
    </button>
  );

  const isDisabled = disabled ? "disabled" : "";

  const asLink = (
    <Link
      className={`${styles["Button"]} + ${styles[type]} + ${styles[size]} + ${styles[isDisabled]} + ${className}  `}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );

  return href ? asLink : asButton;
};

export default Button;
