import React from 'react';
import styles from './Question2.module.css';
import DrawingPad from './DrawingPad';

const Question2 = ({ question }) => {
  return (
    <div className={styles.question}>
      <h2>Question 2</h2>
      {console.log(question)}
      <p>Copy this drawing as accurately as you can.</p>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <DrawingPad></DrawingPad>
        {/* TODO: Replace url */}
        <img
          src="/Screenshot 2024-05-30 at 3.45.14 PM.png"
          alt="tri"
          width="300"
          height="300"
        ></img>
      </div>
    </div>
  );
};

export default Question2;
