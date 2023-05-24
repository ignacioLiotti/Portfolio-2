// Grid.tsx
import React, { useState, useRef, useEffect, Children } from "react";
import styles from "./Grid.module.css";

interface GridItemProps {
  colSpan: number;
  rowSpan: number;
  children: React.ReactNode;
}

interface GridProps {
  children: React.ReactNode;
}

export const GridItem: React.FC<GridItemProps> = ({ colSpan, rowSpan, children }) => {
  

  return (
    <div
      className={styles.gridItem}
      style={{
        gridColumn: `span ${colSpan}`,
        gridRow: `span ${rowSpan}`,
      }}
    >
      <div className={styles.gridContent}>
        {children}
      </div>
    </div>
  );
};

const Grid: React.FC<GridProps> = ({children}) => {

  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!gridRef.current) return;

    const gridContainer = gridRef.current.parentElement;

    if (!gridContainer) return;

    const updateMousePosition = (e: MouseEvent) => {
      const gridItems = gridContainer.getElementsByClassName(styles.gridItem);

      for (const gridItem of gridItems) {
        const rect = gridItem.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        gridItem.style.setProperty("--mouse-x", `${x}px`);
        gridItem.style.setProperty("--mouse-y", `${y}px`);
      }
    };

    gridContainer.addEventListener("mousemove", updateMousePosition);

    return () => {
      if (gridContainer) {
        gridContainer.removeEventListener("mousemove", updateMousePosition);
      }
    };
  }, []);

  return (
    <div className={styles.grid} ref={gridRef}> 
      {children}
    </div>
  );
};

export default Grid;
