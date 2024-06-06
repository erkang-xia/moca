import React, {useEffect, useState} from 'react';
import styles from './Question2.module.css';
import DrawingPad from './DrawingPad';
import Test from '../../test';
import {useAuth} from "../../../contexts/AuthContext";
import {CLOCK, GEOMETRY, GET_GEOMETRY, POST_GEOMETRY} from "../../../constants/api";
import axios from "../../../api/axios"
import {QUESTION_3} from "../../../constants/clientRoute";

const Question2 = () => {
    const [imageUrl, setImageUrl] = useState('');
    const testId = useAuth().testId;
//TODO: This is called twice, find out why!
    useEffect(() => {
        const fetchGeometry = async () => {
            try {
                const response = await axios.get(`${GET_GEOMETRY}/${testId}`, {
                    responseType: 'blob'  // Important: this tells axios to download the response as a Blob
                });
                const url = URL.createObjectURL(response.data);
                console.log("Blob URL:", url);
                setImageUrl(url);
            } catch (error) {
                console.error('Failed to fetch image:', error);
            }
        };
        fetchGeometry();
    }, []);

  return (
    <div className={styles.question}>
      <h2>Question 2</h2>
      <p>Copy this drawing as accurately as you can.</p>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <DrawingPad question={QUESTION_3} path={POST_GEOMETRY} type={GEOMETRY}></DrawingPad>
        <img
          src={imageUrl}
          alt="geometry"
          width="256"
          height="256"
        ></img>
      </div>

      <Test></Test>
    </div>
  );
};

export default Question2;
