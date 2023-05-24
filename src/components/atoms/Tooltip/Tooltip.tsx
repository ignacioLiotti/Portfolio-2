import React, { FC, ReactNode } from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import styles from './Tooltip.module.css';

type Props = {
  children: ReactNode;
  tooltipText: string;
  type?: 'light' | 'dark';
  staticPosition?: 'top' | 'bottom' | 'left' | 'right' | undefined;
} & Tooltip.TooltipProps;


const RadixUITooltip: FC<Props> = ({ children, tooltipText, type = 'light', staticPosition = undefined, ...props }) => (
  <Tooltip.TooltipProvider>
    <Tooltip.Root {...props}>
      <Tooltip.Trigger asChild>
        <div tabIndex={0}>
        {children}
        </div>
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content className={`${styles.tooltip} + ${styles[type]}`} sideOffset={5} side={staticPosition}>
          {tooltipText}
          <Tooltip.Arrow className={`${styles.arrow} + ${styles.secondary}`} />
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  </Tooltip.TooltipProvider>
);

export default RadixUITooltip;