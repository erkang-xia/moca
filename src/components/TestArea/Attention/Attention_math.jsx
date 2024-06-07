import React, { useState } from 'react';
import {useNavigate} from "react-router-dom";
import {LANGUAGE} from "../../../constants/clientRoute";

const Attention_math = () => {
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
            if(history.length > 4){
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
        <div>
            <h1>Serial 7s Test</h1>
            <p>Start from 100 and repeatedly subtract 7. Enter each answer in the input field below.</p>
            <form onSubmit={handleSubmit}>
                <input type="number" value={userInput} onChange={handleInputChange} />
                <button type="submit">Submit</button>
            </form>
            <button onClick={repeatInstructions}>Help</button>
            {error && <p className="error">{error}</p>}
            <div>
                <h2>History</h2>
                {history.length > 0 ? history.map((number, index) => (
                    <p key={index}>{number}</p>
                )) : <p>No answers submitted yet.</p>}
            </div>
        </div>
    );
};

export default Attention_math;
