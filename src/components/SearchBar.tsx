import React from 'react';
import { Search } from 'lucide-react';
import styles from '../styles/SearchBar.module.css';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ value, onChange, placeholder }) => (
<div className={styles.wrapper}>
    <div className={styles.inputWrapper}>
      <input
        value={value}
        onChange={e => onChange(e.target.value)}
        type="text"
        placeholder={placeholder}
        className={styles.input}
      />
      <Search className={styles.icon} />
    </div>
  </div>
);

export default SearchBar;