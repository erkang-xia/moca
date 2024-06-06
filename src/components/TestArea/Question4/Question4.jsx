import React, { useEffect, useState } from 'react';
import styles from './Question4.module.css';
import Input from '../../Input/Input';
import { Link } from "react-router-dom";
import { QUESTION_5 } from "../../../constants/clientRoute";
import axios from "../../../api/axios"
import { AWS_CLOUDFRONT, GET_ANIMAL } from "../../../constants/api";
import { useAuth } from "../../../contexts/AuthContext";

const Question4 = ({ question }) => {
    const [animals, setAnimals] = useState(null);
    const testId = useAuth().testId;

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
    }, [testId]);  // Added testId as a dependency

    if (!animals || animals.length === 0) {
        return <div>Loading animals...</div>;  // Display a loading message or spinner here
    }

    return (
        <div className={styles.question}>
            <h2>Question 4 Naming</h2>
            {console.log(question)}
            <p>Tell me the name of this animal.</p>
            <div className={styles.image_container}>
                {animals.map((animal, index) => (
                    <img
                        key={index}
                        src={`${AWS_CLOUDFRONT}${animal}`}
                        alt={`Animal ${index + 1}`}
                        width="256"
                        height="256"
                    />
                ))}
                <div className={styles.input_container}>
                    <Input/>
                    <button>
                        <Link to={QUESTION_5}>Submit</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Question4;
