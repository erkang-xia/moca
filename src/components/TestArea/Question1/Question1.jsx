import React from 'react';
import styles from './Question1.module.css'; // Importing CSS module
import Canvas from './Canvas';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

const Question1 = () => {

    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <h2 >1. Trail Making</h2>
                <div className={'px-1.5 pb-0.5 bg-primaryBlue rounded-lg'}>
                    <VolumeUpIcon />
                </div>

            </div>
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
