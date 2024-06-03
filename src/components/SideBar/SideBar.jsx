import React from 'react';
import styles from './SideBar.module.css';
import { Link } from 'react-router-dom';

const questions = [
  'Question 1',
  'Question 2',
  'Question 3',
  'Question 4',
  'Question 5',
  'Question 6',
  'Question 7',
  'Question 8',
  'Question 9',
  'Question 10',
];

const SideBar = ({ selectedQuestion, setSelectedQuestion }) => {
  return (
    <div className={styles.sidebar}>
      {questions.map((question, index) => (
        <div
          key={index}
          onClick={() => setSelectedQuestion(question)}
          className={selectedQuestion === question ? styles.active : ''}
        >
          <Link to={`userId/testId/Q${index + 1}`}>{question}</Link>
        </div>
      ))}
    </div>
  );
};

export default SideBar;
