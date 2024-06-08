import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {ORIENTATION} from "../../../constants/clientRoute";

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
        navigate(ORIENTATION)
    };

    return (
        <div>
            <h1>Memory Test</h1>
            <form onSubmit={handleSubmit}>
                {words.map((word, index) => (
                    <input
                        key={index}
                        type="text"
                        value={word}
                        onChange={handleInputChange(index)}
                        placeholder={`Word ${index + 1}`}
                        style={{margin: '10px'}}
                    />
                ))}
                <button type="submit">Submit</button>
            </form>
            {submission && <p>You submitted: {submission}</p>}
        </div>
    );
};

export default Memory_test;
