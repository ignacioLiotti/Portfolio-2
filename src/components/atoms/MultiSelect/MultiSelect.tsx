// MultiSelectList.tsx
import React, { useId, useState } from 'react';
import styles from './MultiSelect.module.css';

interface Option {
  value: string;
  label: string;
  key: string;
}

interface MultiSelectListProps {
  options: Option[];
}

export const MultiSelectList: React.FC<MultiSelectListProps> = ({ options }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOption = (value: string) => {
    setSelectedOptions((prevState) =>
      prevState.includes(value)
        ? prevState.filter((option) => option !== value)
        : [...prevState, value]
    );
  };

  return (
    <ul className={styles.multiSelect}>
      {options.map((option, index) => (
        <Checkbox 
          option={option}
          selectedOptions={selectedOptions}
          toggleOption={toggleOption}
          key={option.key}
        />
      ))}
    </ul>
  );
};

interface CheckboxProps {
  option: {
    value: string;
    label: string;
  };
  selectedOptions: string[];
  toggleOption: (value: string) => void;
}

const Checkbox: React.FC<CheckboxProps> = ({option, selectedOptions, toggleOption}) => {
  const id = useId()
  return (
    <li className={styles.li} key={option.value}>
          <label  className={styles.checkbox}>
            <input
              id={id}
              type="checkbox"
              checked={selectedOptions.includes(option.value)}
              onChange={() => toggleOption(option.value)}
              />
            <span className={styles.checkboxCheckmark}></span>
          </label>
          <label htmlFor={id} className={styles.label}>{option.label}</label>
        </li>
  )
}