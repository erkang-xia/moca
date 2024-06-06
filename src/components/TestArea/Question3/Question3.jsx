import React, {useEffect} from 'react';
import styles from './Question3.module.css';
import DrawingPad from '../Question2/DrawingPad';
import { QUESTION_4 } from '../../../constants/clientRoute';
import {CLOCK, POST_CLOCK, POST_CLOCK_EXPRESSION} from "../../../constants/api";
import TimeExpressions, {PHRASE_COUNT} from "../../../constants/clock";
import axios from "../../../api/axios";
import {useAuth} from "../../../contexts/AuthContext";

const Question3 = ({ question }) => {
    question = TimeExpressions[Math.floor(Math.random() * (PHRASE_COUNT + 1))];
    const testId = useAuth().testId;

    useEffect( () => {
        const  saveQuestion = async () => {
            try {
                await axios.post(`${POST_CLOCK_EXPRESSION}/${testId}`, question,{headers: {
                    'Content-Type': 'text/plain;charset=UTF-8'
                }});
                console.log('Expression successfully');
            } catch (error) {
                console.error('Error saving Expression:', error.response ? error.response.data : error.message);
            }

        }

        saveQuestion();
    }, [question]);

    return (
    <div className={styles.question}>
      <h2>Question 3</h2>
      <p>
          {question}
      </p>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <DrawingPad question={QUESTION_4} path={POST_CLOCK} type={CLOCK}></DrawingPad>
      </div>
    </div>
  );
};

export default Question3;
