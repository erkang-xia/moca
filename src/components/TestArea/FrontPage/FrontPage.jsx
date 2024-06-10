import React from 'react';
import styles from './FrontPage.module.css';

const FrontPage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.leftSection}>
                    <div className={styles.header}>
                        <h1 className={styles.headerTitle}>Hey Erkang Xia,</h1>
                        <h2 className={styles.subHeaderTitle}>Welcome to MOCA Test</h2>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.infoItem}>
                            <p className={styles.infoLabel}>Test duration</p>
                            <p className={styles.infoValue}>45 ~ 60 mins</p>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <a href="#" className={styles.footerLink}>Platform Help</a>
                        <a href="#" className={styles.footerLink}>FAQ</a>
                    </div>
                </div>
            <div className={styles.rightSection}>
                    <div className={styles.instructions}>
                        <h3 className={styles.instructionsTitle}>Instructions</h3>
                        <ul className={styles.instructionsList}>
                            <li>This is not a timed test. However, please make sure you are not interrupted during the test, as the test cannot be paused once started.</li>
                            <li>Please ensure you have a stable internet connection.</li>
                            <li>We recommend you to try the <a href="#" className={styles.link}>sample test</a> for a couple of minutes, before taking the main test.</li>
                        </ul>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button className={styles.primaryButton}>Continue</button>
                        <button className={styles.secondaryButton}>Try Sample Test</button>
                    </div>
                </div>
        </div>
    );
};

export default FrontPage;
