import React from "react";
import { ReactNode } from "react";
import styles from "./Dropdown.module.css";
import {
  Root as DropdownRoot,
  Trigger as DropdownTrigger,
  Content as DropdownContent,
  Portal as DropdownPortal,
} from "@radix-ui/react-dropdown-menu";

export interface DropdownProps {
  trigger: ReactNode;
  content: ReactNode;
  rootProps?: Partial<React.ComponentProps<typeof DropdownRoot>>;
  contentProps?: Partial<React.ComponentProps<typeof DropdownContent>>;
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
        <DropdownPortal>
          <DropdownContent className={styles.dropdownContent} {...contentProps}>
            {content}
          </DropdownContent>
        </DropdownPortal>
      </DropdownRoot>
    </div>
  );
};

export default Dropdown;