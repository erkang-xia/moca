import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { LANGUAGE } from "../../../constants/clientRoute";
import styles from './AttentionMath.module.css'; // Importing CSS module

const AttentionMath = () => {
    const [currentNumber, setCurrentNumber] = useState(100);
    const [userInput, setUserInput] = useState('');
    const [history, setHistory] = useState([]);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleInputChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const userAnswer = parseInt(userInput, 10);
        const correctAnswer = currentNumber - 7;

        if (userAnswer === correctAnswer) {
            setCurrentNumber(userAnswer);
            setHistory(prev => [...prev, userAnswer]);
            setError('');
            if (history.length > 4) {
                navigate(LANGUAGE);
            }
        } else {
            setError("That's incorrect. Please try again.");
        }

        setUserInput(''); // Reset input field after submission
    };

    const repeatInstructions = () => {
        setError("Please subtract 7 from the last number you entered correctly.");
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Attention: Subtract by 7</h1>
            <p className={styles.instructions}>Start from 100 and repeatedly subtract 7. Enter each answer in the input field below.</p>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input type="number" value={userInput} onChange={handleInputChange} className={styles.input} />
                <button type="submit" className={styles.button}>Submit</button>
            </form>
            <button onClick={repeatInstructions} className={styles.button}>Help</button>
            {error && <p className={styles.error}>{error}</p>}
            <div className={styles.historyContainer}>
                <h2 className={styles.historyTitle}>History</h2>
                {history.length > 0 ? history.map((number, index) => (
                    <p key={index} className={styles.historyItem}>{number}</p>
                )) : <p>No answers submitted yet.</p>}
            </div>
        </div>
    );
};

export default AttentionMath;
