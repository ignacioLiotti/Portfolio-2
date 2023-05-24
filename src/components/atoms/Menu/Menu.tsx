import React from 'react';
import * as Menubar from '@radix-ui/react-menubar';
import styles from './Menu.module.css';
import { motion } from 'framer-motion';

interface MenuProps {
  trigger: React.ReactElement;
  content: React.ReactElement;
}

const Menu: React.FC<MenuProps> = ({ trigger, content }) => {
  return (
    <Menubar.Menu>
      <Menubar.Trigger className={styles.MenubarTrigger}>{trigger}</Menubar.Trigger>
          <Menubar.Portal>
        <Menubar.Content 
          className={styles.MenubarContent}
          align="start"
          sideOffset={5}
          alignOffset={-3}
        > 
          {content}
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  );
};

export default Menu;