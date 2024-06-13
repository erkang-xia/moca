import React, { useEffect, useState } from 'react';
import styles from './Question2.module.css';
import DrawingPad from './DrawingPad';
import { useAuth } from "../../../contexts/AuthContext";
import {GEOMETRY, GET_GEOMETRY, POST_GEOMETRY } from "../../../constants/api";
import axios from "../../../api/axios";
import { QUESTION_3 } from "../../../constants/clientRoute";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

const Question2 = () => {
    const [imageUrl, setImageUrl] = useState('');
    const testId = useAuth().testId;

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
    }, [testId]);

    return (
        <div className={styles.container}>

            <div className={styles.instructionContainer}>
                <h2 className={styles.title}>
                    Visuoconstructional Skills
                </h2>
                <p className={styles.text}> Copy this drawing on the blue area as accurately as you can.</p>
                <p className={styles.text}> You can also draw on a paper, take a picture and upload it </p>
                <div className={styles.imageContainer}>
                    <div className={styles.speaker}>
                        <VolumeUpIcon/>
                    </div>
                    <img
                        src={imageUrl}
                        alt="geometry"
                        width="256"
                        height="256"
                        className={styles.geometryImage}
                    />
                </div>

            </div>

            <div className={styles.canvasWrapper}>
                <DrawingPad question={QUESTION_3} path={POST_GEOMETRY} type={GEOMETRY}/>

            </div>
        </div>
    );
};

export default Question2;
