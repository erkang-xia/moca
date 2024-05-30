import React from 'react';
import styles from './Question3.module.css';
import DrawingPad from '../Question2/DrawingPad';

const Question3 = ({ question }) => {
  return (
    <div className={styles.question}>
      <h2>Question 3</h2>
      <p>
        Draw a clock. Put in all the numbers and set the time to 10 past 11.
      </p>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <DrawingPad></DrawingPad>
      </div>
    </div>
  );
};

export default Question3;