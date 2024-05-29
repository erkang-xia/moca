import React from 'react';
import styles from './Question1.module.css';

const Question1 = ({ question }) => {
  return (
    <div className={styles.question}>
      <h2>{question}</h2>
      {/* Add more content based on the question */}
    </div>
  );
};

export default Question1;
