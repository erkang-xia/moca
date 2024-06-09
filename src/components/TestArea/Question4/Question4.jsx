import React, { useEffect, useState } from 'react';
import styles from './Question4.module.css';
import Input from '../../Input/Input';
import { useNavigate } from 'react-router-dom';
import { QUESTION_5 } from "../../../constants/clientRoute";
import axios from "../../../api/axios";
// POST_ANIMAL_NAMES
import { AWS_CLOUDFRONT, GET_ANIMAL } from "../../../constants/api";

import { useAuth } from "../../../contexts/AuthContext";

const Question4 = ({ question }) => {
    const [animals, setAnimals] = useState(null);
    const [animalNames, setAnimalNames] = useState([]);
    const testId = useAuth().testId;
    const navigate = useNavigate();

    useEffect(() => {
        const getAnimals = async () => {
            try {
                const response = await axios.get(`${GET_ANIMAL}/${testId}`);
                setAnimals(response.data.data);  // Assuming response.data.data is the array of animal image paths
            } catch (error) {
                console.log('Error fetching animals:', error);
            }
        };

        getAnimals();
    }, [testId]);

    const handleInputChange = (index, value) => {
        const newAnimalNames = [...animalNames];
        newAnimalNames[index] = value;
        setAnimalNames(newAnimalNames);
    };

    const handleSubmit = async () => {
        try {
            // await axios.post(`${POST_ANIMAL_NAMES}/${testId}`, { names: animalNames });
            navigate(QUESTION_5);
        } catch (error) {
            console.log('Error submitting animal names:', error);
        }
    };

    if (!animals || animals.length === 0) {
        return <div>Loading animals...</div>;  // Display a loading message or spinner here
    }

    return (
        <div className={styles.question}>
            <h2>Question 4 Naming</h2>
            <p>Tell me the name of this animal.</p>
            <div className={styles.imageContainer}>
                {animals.map((animal, index) => (
                    <div key={index} className={styles.imageWrapper}>
                        <img
                            src={`${AWS_CLOUDFRONT}${animal}`}
                            alt={`Animal ${index + 1}`}
                            width="256"
                            height="256"
                        />
                        <input
                            type="text"
                            placeholder="Enter name"
                            value={animalNames[index] || ''}
                            onChange={(e) => handleInputChange(index, e.target.value)}
                            className={styles.inputField}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.inputContainer}>
                <button onClick={handleSubmit} className={styles.submitButton}>Submit</button>
            </div>
        </div>
    );
};

export default Question4;
