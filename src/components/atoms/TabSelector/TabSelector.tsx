import React, { useState, useRef, useEffect } from 'react';
import styles from './TabSelector.module.css';

interface TabOption {
  value: string;
  label: string;
}

interface TabSelectorProps {
  options: TabOption[];
  onTabChange?: (value: string) => void;
}

export const TabSelector: React.FC<TabSelectorProps> = ({
  options,
  onTabChange,
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [selectedTab, setSelectedTab] = useState(0);
  const tabRefs = useRef<(HTMLDivElement | null)[]>([]);
  const tabIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    updateTabIndicator();
  }, [activeTabIndex]);

  const updateTabIndicator = () => {
    const activeTabElement = tabRefs.current[activeTabIndex];

    if (activeTabElement && tabIndicatorRef.current) {
      tabIndicatorRef.current.style.left = `${activeTabElement.offsetLeft}px`;
      tabIndicatorRef.current.style.width = `${activeTabElement.offsetWidth}px`;
    }
  };

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
    setActiveTabIndex(index);
    if (onTabChange) {
      onTabChange(index.toString());
    }
  };

  const handleMouseOver = (index: number) => {
    setActiveTabIndex(index);
  };

  const handleMouseOut = () => {
    setActiveTabIndex(selectedTab);
  };

  const handleFocus = (index: number) => {
    setActiveTabIndex(index);
  };

  return (
    <div className={styles.tabSelector}>
      {options.map((option, index) => (
        <div
          key={option.value}
          ref={(element) => (tabRefs.current[index] = element)}
          className={styles.tabOption + (activeTabIndex === index ? ' active' : '') + ' ' + (selectedTab === index ? styles.selected : '')}
          onClick={() => handleTabClick(index)}
          onMouseOver={() => handleMouseOver(index)}
          onMouseOut={handleMouseOut}
          onFocus={() => handleFocus(index)}
          tabIndex={0}
        >
          {option.label}
        </div>
      ))}
      <div className={styles.tabAfter} ref={tabIndicatorRef}></div>
    </div>
  );
};