import React from "react";
import { Item as DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import styles from "./DropdownItem.css";

export interface DropdownItemProps {
  asChild?: boolean;
  disabled?: boolean;
  onSelect?: () => void;
  textValue?: string;
  children: React.ReactNode;
}

const DropdownItem: React.FC<DropdownItemProps> = ({
  asChild,
  disabled,
  onSelect,
  textValue,
  children,
}) => {
  return (
    <DropdownMenuItem
      asChild={asChild}
      disabled={disabled}
      onSelect={onSelect}
      textValue={textValue}
      className={styles.dropdownItem}
    >
      {children}
    </DropdownMenuItem>
  );
};

export default DropdownItem;