import React from 'react';
import styles from './Question1.module.css';
import Canvas from './Canvas';

const Question1 = ({ question }) => {
  return (
    <div className={styles.question}>
      <h2>{question}</h2>
      <p>
        Please draw a line going from a number to a letter in ascending order.
        Begin here [point to (1)] and draw a line from 1 then to A then to 2 and
        so on. End here [point to (E)].
      </p>
      {/* Add more content based on the question */}
      <Canvas></Canvas>
    </div>
  );
};

export default Question1;
