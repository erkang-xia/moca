// src/components/Input.js
import React from 'react';
import styles from './Input.module.css';

const Input = () => {
  return (
    <div className={styles.inputContainer}>
      <input
        type="text"
        placeholder="Type your answer here..."
        className={styles.input}
      />
    </div>
  );
};

export default Input;
