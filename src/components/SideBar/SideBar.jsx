import React from 'react';
import styles from './SideBar.module.css';
import { Outlet, Link } from 'react-router-dom';

const SideBar = ({ selectedQuestion, setSelectedQuestion }) => {
  return (
    <div className={styles.sidebar}>
      <div
        onClick={() => setSelectedQuestion('Question 1')}
        className={selectedQuestion === 'Question 1' ? styles.active : ''}
      >
        <Link to={`userId/testId/Q1`}>Question 1</Link>
      </div>
      <div
        onClick={() => setSelectedQuestion('Question 2')}
        className={selectedQuestion === 'Question 2' ? styles.active : ''}
      >
        <Link to={`userId/testId/Q2`}>Question 2</Link>
      </div>
      <div
        onClick={() => setSelectedQuestion('Question 3')}
        className={selectedQuestion === 'Question 3' ? styles.active : ''}
      >
        <Link to={`userId/testId/Q3`}>Question 3</Link>
      </div>
    </div>
  );
};

export default SideBar;
