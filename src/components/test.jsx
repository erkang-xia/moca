import React from 'react';
import styles from './test.module.css';
const Test = () => {


  return (
      <div className={styles.flexContainer}>
        <div className={styles.item1}>Item 1</div>
        <div className={styles.item2}>Item 2</div>
        <div className={styles.item3}>Item 3</div>
      </div>


  );
};

export default Test;
