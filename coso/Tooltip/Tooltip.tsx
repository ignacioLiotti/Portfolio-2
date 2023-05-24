import React, { FC, ReactNode } from 'react';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import styles from './Tooltip.css';

export type Props = {
  children: ReactNode;
  tooltipText: string;
  type?: 'light' | 'dark';
  staticPosition?: 'top' | 'bottom' | 'left' | 'right' | undefined;
} & RadixTooltip.TooltipProps;


const Tooltip: FC<Props> = ({ children, tooltipText, type = 'light', staticPosition = undefined, ...props }) => (
  <RadixTooltip.TooltipProvider>
    <RadixTooltip.Root {...props}>
      <RadixTooltip.Trigger asChild>
        <div tabIndex={0}>
        {children}
        </div>
      </RadixTooltip.Trigger>
      <RadixTooltip.Portal>
        <RadixTooltip.Content className={`${styles.tooltip} + ${styles[type]}`} sideOffset={5} side={staticPosition}>
          {tooltipText}
          <RadixTooltip.Arrow className={`${styles.arrow} + ${styles.secondary}`} />
        </RadixTooltip.Content>
      </RadixTooltip.Portal>
    </RadixTooltip.Root>
  </RadixTooltip.TooltipProvider>
);

export default Tooltip;