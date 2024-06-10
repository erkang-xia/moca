import React from 'react';
import styles from './HeadBar.module.css';

const HeadBar = () => {
    return (
        <div className={styles.headbarContainer}>
            <div className={styles.headbarContent}>
                <div className={styles.logo}>
                    MOCA
                </div>
                {/*<nav className="space-x-4">*/}
                {/*    <a href="#" className={styles.navLink}>Home</a>*/}
                {/*    <a href="#" className={styles.navLink}>About</a>*/}
                {/*    <a href="#" className={styles.navLink}>Services</a>*/}
                {/*    <a href="#" className={styles.navLink}>Contact</a>*/}
                {/*</nav>*/}
                <div>
                    <button className={styles.loginButton}>
                        Exit
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeadBar;
