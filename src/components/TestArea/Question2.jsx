import React from 'react';
import styles from './Question1.module.css';

const Question2 = ({ question }) => {
  return (
    <div className={styles.question}>
      <h2>{question}</h2>
      <p>Question2</p>
    </div>
  );
};

export default Question2;
