import React, { useEffect, useState } from 'react';
import styles from './Question4.module.css';
import { useNavigate } from 'react-router-dom';
import {MEMORY} from "../../../constants/clientRoute";
import axios from "../../../api/axios";
// POST_ANIMAL_NAMES
import { AWS_CLOUDFRONT, GET_ANIMAL } from "../../../constants/api";

import { useAuth } from "../../../contexts/AuthContext";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const Question4 = () => {
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
            navigate(MEMORY);
        } catch (error) {
            console.log('Error submitting animal names:', error);
        }
    };

    if (!animals || animals.length === 0) {
        return <div>Loading animals...</div>;  // Display a loading message or spinner here
    }

    return (
        <div className={styles.container}>
            <div className={styles.instructionContainer}>
                <h2 className={styles.title}>
                    Naming
                    <div className={styles.speaker}>
                        <VolumeUpIcon/>
                    </div>
                </h2>
                <p className={styles.text}>Tell me the name of this animal.</p>
            </div>
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
