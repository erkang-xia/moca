import React from 'react';
import styles from './HeadBar.module.css';
import ProgressBar from "./ProgressBar";

const HeadBar = ({location}) => {
    return (
        <div className={styles.headbarContainer}>
            <div className={styles.headbarContent}>
                <div className={styles.logo}>
                    MOCA
                </div>
                <button className={styles.exitButton}>
                    Exit
                </button>
            </div>
            <div>
                <ProgressBar location={location} />
            </div>
        </div>
    );
};

export default HeadBar;
