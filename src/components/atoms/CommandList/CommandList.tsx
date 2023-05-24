import React, { useEffect, useState } from 'react';
import styles from './CommandList.module.css';

export interface Command {
  name: string;
  shortcut: string;
  isSeparator?: boolean;
}

interface CommandListProps {
  commands: Command[];
}

const CommandList: React.FC<CommandListProps> = ({ commands }) => {
  const [activeCommand, setActiveCommand] = useState<number | null>(null);

  const handleKeyDown = (event: KeyboardEvent) => {
    commands.forEach((command, index) => {
      if (event.ctrlKey && event.key.toUpperCase() === command.shortcut.slice(-1)) {
        event.preventDefault()
        setActiveCommand(index);
        setTimeout(() => {
          setActiveCommand(null);
        }, 200);
      }
    });
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className={styles.commandList}>
      {commands.map((command, index) => (
        command.isSeparator ? (
          <div key={index} className={styles.separator} />
        ) : (
          <div key={index} className={`${styles.command} ${activeCommand === index ? styles.active : ''}`}>
            <div className={styles.commandName}>{command.name}</div>
            <div className={styles.commandShortcut}>{command.shortcut}</div>
          </div>
        )
      ))}
    </div>
  );
};

export default CommandList;
