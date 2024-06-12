import React from 'react';
import styles from './Question1.module.css'; // Importing CSS module
import Canvas from './Canvas';


const Question1 = () => {

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>1. Trail Making</h2>
            <p className={styles.text}>
                Please draw a line going from a number to a letter in ascending order.
            </p>
            <p className={styles.text}>
                Begin here [point to (1)] and draw a line from 1 then to A then to 2 and
                so on. End here [point to (E)].
            </p>
            <div className={styles.canvasWrapper}>
                <Canvas/>
            </div>
        </div>
    );
};

export default Question1;
