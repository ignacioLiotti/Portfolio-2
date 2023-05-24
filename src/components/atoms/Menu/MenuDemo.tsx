import React from 'react';
import Menu from './Menu';
import * as Menubar from '@radix-ui/react-menubar';
import { CheckIcon, ChevronRightIcon, DotFilledIcon } from '@radix-ui/react-icons';
import styles from './MenuDemo.module.css';
import Button from '../Button/Button';

const RADIO_ITEMS = ['Andy', 'Benoît', 'Luis'];
const CHECK_ITEMS = ['Show Bookmarks', 'Show Full URLs'];

const MenubarDemo = () => {
  const [checkedSelection, setCheckedSelection] = React.useState([CHECK_ITEMS[1]]);
  const [radioSelection, setRadioSelection] = React.useState(RADIO_ITEMS[2]);

  return (
    <Menubar.Root className={styles.MenubarRoot}>
      <Menu
        trigger={<Button tabindex={0} type='selection'>File</Button>}
        content={
          <div style={{display:'flex', flexDirection:'column',gap:'5px'}}>
            <Menubar.Item className={styles.MenubarItem}>
              New Tab <div className={styles.RightSlot}>⌘ T</div>
            </Menubar.Item>
            {/* ...other content */}
            <Menubar.Sub>
              <Menubar.SubTrigger className={styles.MenubarSubTrigger}>
                Share
                <div className={styles.RightSlot}>
                  <ChevronRightIcon />
                </div>
              </Menubar.SubTrigger>
              <Menubar.Portal>
                <Menubar.SubContent className={styles.MenubarSubContent} alignOffset={-5}>
                  <Menubar.Item className={styles.MenubarItem}>Email Link</Menubar.Item>
                  <Menubar.Item className={styles.MenubarItem}>Messages</Menubar.Item>
                  <Menubar.Item className={styles.MenubarItem}>Notes</Menubar.Item>
                </Menubar.SubContent>
              </Menubar.Portal>
            </Menubar.Sub>
          </div>
        }
      />

      <Menu
        trigger={<Button tabindex={0} type='selection'>View</Button>}
        content={
          <>
            {CHECK_ITEMS.map((item) => (
              <Menubar.CheckboxItem
                className={`${styles.MenubarCheckboxItem} ${styles.inset}`}
                key={item}
                checked={checkedSelection.includes(item)}
                onCheckedChange={() =>
                  setCheckedSelection((current) =>
                    current.includes(item)
                      ? current.filter((el) => el !== item)
                      : current.concat(item)
                  )
                }
              >
                <Menubar.ItemIndicator className={styles.MenubarItemIndicator}>
                  <CheckIcon />
                </Menubar.ItemIndicator>
                {item}
              </Menubar.CheckboxItem>
            ))}
            {/* ...other content */}
          </>
        }
      />

      <Menu
        trigger={<Button tabindex={0} type='selection'>Profiles</Button>}
        content={
          <>
            <Menubar.RadioGroup value={radioSelection} onValueChange={setRadioSelection}>
              {RADIO_ITEMS.map((item) => (
                <Menubar.RadioItem className={`${styles.MenubarRadioItem} ${styles.inset}`} key={item} value={item}>
                  <Menubar.ItemIndicator className={styles.MenubarItemIndicator}>
                    <DotFilledIcon />
                  </Menubar.ItemIndicator>
                  {item}
                </Menubar.RadioItem>
              ))}
            </Menubar.RadioGroup>
            {/* ...other content */}
          </>
        }
      />
    </Menubar.Root>
  );
};

export default MenubarDemo;
