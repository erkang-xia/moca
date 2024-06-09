import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { MEMORY_TEST } from "../../../constants/clientRoute";
import styles from './Abstraction.module.css'; // Importing CSS module

const Abstraction = () => {
  const trials = [
    { words: ["orange", "banana"], category: "Fruits" },
    { words: ["train", "bicycle"], category: "Modes of Transport" },
    { words: ["ruler", "watch"], category: "Measuring Tools" }
  ];
  const [currentTrialIndex, setCurrentTrialIndex] = useState(0);
  const [userResponse, setUserResponse] = useState('');
  const [feedback, setFeedback] = useState('');
  const [promptGiven, setPromptGiven] = useState(false);
  const navigate = useNavigate();

  const handleUserInput = (event) => {
    setUserResponse(event.target.value);
  };

  const handleSubmit = () => {
    const correctCategory = trials[currentTrialIndex].category;
    if (userResponse.toLowerCase() === correctCategory.toLowerCase()) {
      setFeedback(`Yes, both items are part of the category ${correctCategory}.`);
      proceedToNextTrial();
    } else if (!promptGiven) {
      setFeedback("Tell me another category to which these items belong to.");
      setPromptGiven(true);
    } else {
      setFeedback(`Yes, and they also both belong to the category ${correctCategory}.`);
      proceedToNextTrial();
    }
    setUserResponse(''); // Clear input field
  };

  const proceedToNextTrial = () => {
    if (currentTrialIndex < trials.length - 1) {
      setCurrentTrialIndex(currentTrialIndex + 1);
    } else {
      navigate(MEMORY_TEST);
    }
    setPromptGiven(false); // Reset prompt given status for the next trial
  };

  return (
      <div className={styles.container}>
        <h1 className={styles.title}>Abstraction Task</h1>
        <p className={styles.instructions}>
          I will show you two words and I would like you to tell me to what category they belong to:
          <strong className={styles.words}> {trials[currentTrialIndex].words.join(" and ")}.</strong>
        </p>
        <input
            type="text"
            value={userResponse}
            onChange={handleUserInput}
            placeholder="Enter category"
            className={styles.input}
        />
        <button onClick={handleSubmit} className={styles.button}>Submit</button>
        {feedback && <p className={styles.feedback}>{feedback}</p>}
      </div>
  );
};

export default Abstraction;
