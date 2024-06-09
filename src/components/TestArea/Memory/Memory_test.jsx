import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { ORIENTATION } from "../../../constants/clientRoute";
import styles from './Memory_test.module.css'; // Importing CSS module

const Memory_test = () => {
    const [words, setWords] = useState(Array(5).fill(''));  // Initializes an array of 5 empty strings
    const [submission, setSubmission] = useState(null);
    const navigate = useNavigate();

    const handleInputChange = (index) => (event) => {
        const newWords = [...words];  // Create a copy of the words array
        newWords[index] = event.target.value;  // Update the word at the specified index
        setWords(newWords);  // Set the new words array into the state
    };

    const handleSubmit = (event) => {
        event.preventDefault();  // Prevent the form from submitting in the traditional way
        setSubmission(words.join(', '));  // Join the words array into a string and set it as the submission
        navigate(ORIENTATION);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Memory Test</h1>
            <p className={styles.instructions}>
                I read some words to you earlier, which I asked you to remember. Tell me as many of those words as you can remember.
            </p>
            <form onSubmit={handleSubmit}>
                {words.map((word, index) => (
                    <input
                        key={index}
                        type="text"
                        value={word}
                        onChange={handleInputChange(index)}
                        placeholder={`Word ${index + 1}`}
                        className={styles.input}
                    />
                ))}
                <button type="submit" className={styles.button}>Submit</button>
            </form>
            {submission && <p className={styles.submission}>You submitted: {submission}</p>}
        </div>
    );
};

export default Memory_test;
