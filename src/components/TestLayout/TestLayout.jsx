import React, { useState } from 'react';
import SideBar from '../SideBar/SideBar';
import { Outlet } from 'react-router-dom';
import Input from '../Input/Input';
import styles from './TestLayout.module.css';

const TestLayout = () => {
  const [selectedQuestion, setSelectedQuestion] = useState('Question 1');

  function handleChange(newName) {
    setSelectedQuestion(newName);
  }

  return (
    <div className={styles.testContainer}>
      <SideBar
        selectedQuestion={selectedQuestion}
        setSelectedQuestion={handleChange}
      />
      {/* <div className={styles.questionContainer}>
        <Question1 question={selectedQuestion} />
      </div> */}
      <Outlet />
      <Input />
    </div>
  );
};

export default TestLayout;
