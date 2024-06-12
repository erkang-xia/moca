import React from 'react';
import styles from './ProgressBar.module.css';
import {
    QUESTION_1,
    ABSTRACTION,
    ATTENTION_CLICK,
    ATTENTION_MAIN,
    ATTENTION_MATH,
    LANGUAGE_FLUENCY,
    MEMORY_TEST, ORIENTATION, QUESTION_2, QUESTION_3, QUESTION_4, QUESTION_5, MEMORY, LANGUAGE
} from "../../constants/clientRoute"; // Importing CSS module
const ProgressBar = ({location}) => {

    const progress = {
        [`${QUESTION_1}`]: 1,
        [`${QUESTION_2}`]: 2,
        [`${QUESTION_3}`]: 3,
        [`${QUESTION_4}`]: 4,
        [`${QUESTION_5}`]: 5,
        [`${ATTENTION_MAIN}`]: 6,
        [`${ATTENTION_CLICK}`]: 7,
        [`${ATTENTION_MATH}`]: 8,
        [`${LANGUAGE}`]: 9,
        [`${LANGUAGE_FLUENCY}`]: 10,
        [`${MEMORY}`]: 11,
        [`${MEMORY_TEST}`]: 12,
        [`${ABSTRACTION}`]: 13,
        [`${ORIENTATION}`]: 14
    };

    const percentage = Math.round((progress[location] / 14) * 100);


    return (
        <div className={styles.progressContainer}>
            <div className={styles.progressBar} style={{width: `${percentage}%`}}>
            </div>
        </div>
    );
};

export default ProgressBar;

