import React, { useEffect } from 'react';
import styles from './Question3.module.css';
import DrawingPad from '../Question2/DrawingPad';
import { QUESTION_4 } from '../../../constants/clientRoute';
import { CLOCK, POST_CLOCK, POST_CLOCK_EXPRESSION } from "../../../constants/api";
import TimeExpressions, { PHRASE_COUNT } from "../../../constants/clock";
import axios from "../../../api/axios";
import { useAuth } from "../../../contexts/AuthContext";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const Question3 = ({ question }) => {
    question = TimeExpressions[Math.floor(Math.random() * (PHRASE_COUNT + 1))];
    const testId = useAuth().testId;

    useEffect(() => {
        const saveQuestion = async () => {
            try {
                await axios.post(`${POST_CLOCK_EXPRESSION}/${testId}`, question, {
                    headers: {
                        'Content-Type': 'text/plain;charset=UTF-8'
                    }
                });
                console.log('Expression successfully saved');
            } catch (error) {
                console.error('Error saving expression:', error.response ? error.response.data : error.message);
            }
        };

        saveQuestion();
    }, [question, testId]);

    return (
        <div className={styles.container}>
            <div className={styles.instructionContainer}>
                <h2 className={styles.title}>
                    Visuoconstructional Skills
                    <div className={styles.speaker}>
                        <VolumeUpIcon/>
                    </div>
                </h2>
                <p className={styles.text}>{question}</p>
            </div>
            <div>
            <DrawingPad question={QUESTION_4} path={POST_CLOCK} type={CLOCK} />
            </div>
        </div>
    );
};

export default Question3;
