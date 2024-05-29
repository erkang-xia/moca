import React from 'react';
import styles from './SideBar.module.css';

const SideBar = ({ selectedQuestion, setSelectedQuestion }) => {
  return (
    <div className={styles.sidebar}>
      <div
        onClick={() => setSelectedQuestion('Question 1')}
        className={selectedQuestion === 'Question 1' ? styles.active : ''}
      >
        Question 1
      </div>
      <div
        onClick={() => setSelectedQuestion('Question 2')}
        className={selectedQuestion === 'Question 2' ? styles.active : ''}
      >
        Question 2
      </div>
    </div>
  );
};

export default SideBar;
