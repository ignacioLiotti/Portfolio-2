import React from "react";
import { ReactNode } from "react";
import styles from "./Dropdown.css";
import {
  Root as DropdownRoot,
  Trigger as DropdownTrigger,
  Content as DropdownContent,
} from "@radix-ui/react-dropdown-menu";

interface DropdownRootProps {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
  modal?: boolean;
  dir?: "ltr" | "rtl";
}

interface DropdownContentProps {
  asChild?: boolean;
  loop?: boolean;
  onCloseAutoFocus?: () => void;
  onEscapeKeyDown?: () => void;
  onPointerDownOutside?: () => void;
  onFocusOutside?: () => void;
  onInteractOutside?: () => void;
  forceMount?: true; 
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  alignOffset?: number;
  avoidCollisions?: boolean;
  collisionBoundary?: any[]; // Replace 'any' with the actual Boundary type if it's available
  collisionPadding?: number | any; // Replace 'any' with the actual Padding type if it's available
  arrowPadding?: number;
  sticky?: "partial";
  hideWhenDetached?: boolean;
  dataState?: "open" | "closed";
  dataSide?: "left" | "right" | "bottom" | "top";
  dataAlign?: "start" | "end" | "center";
  dataOrientation?: "vertical" | "horizontal";
}

export interface DropdownProps {
  trigger: React.ReactElement;
  content: ReactNode;
  rootProps: DropdownRootProps;
  contentProps: DropdownContentProps;
}

const Dropdown: React.FC<DropdownProps> = ({
  trigger,
  content,
  rootProps,
  contentProps,
}) => {
  return (
    <div className={styles.dropdown}>
      <DropdownRoot {...rootProps}>
        <DropdownTrigger asChild>
          <div>
            {React.cloneElement(trigger as React.ReactElement, {
              "aria-haspopup": "menu",
              "aria-expanded": trigger.props["aria-expanded"],
              onClick: trigger.props.onClick,
              onKeyDown: trigger.props.onKeyDown,
              onMouseDown: trigger.props.onMouseDown,
            })}
          </div>
        </DropdownTrigger>
        <DropdownContent
          className={styles.dropdownContent}
          {...contentProps}
        >
          {content}
        </DropdownContent>
      </DropdownRoot>
    </div>
  );
};

export default Dropdown;