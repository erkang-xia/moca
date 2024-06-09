import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { ATTENTION_MATH } from "../../../constants/clientRoute";
import styles from './Attention_click.module.css'; // Importing CSS module

const Attention_click = () => {
    const instructionUrl = ["/attention_intro3.mp3"]; // URL for the instruction audio
    const [instructionalAudioIndex, setInstructionalAudioIndex] = useState(0);
    const sequenceUrls = [["/a.mp3", "/b.mp3", "/c.mp3", "/a.mp3", "/a.mp3", "/d.mp3", "/h.mp3", "/b.mp3"]];
    const [currentAudioIndex, setCurrentAudioIndex] = useState(-1);
    const [instructionPlayed, setInstructionPlayed] = useState(false);
    const [audioPlayed, setAudioPlayed] = useState(false);
    const [isButtonPressed, setIsButtonPressed] = useState(false);
    const audioRef = useRef(null);
    const navigate = useNavigate();

    const playInstructionAudio = () => {
        audioRef.current.src = instructionUrl[instructionalAudioIndex];
        audioRef.current.play();
        audioRef.current.onended = () => {
            setInstructionPlayed(true);
            setInstructionalAudioIndex(instructionalAudioIndex + 1);
        };
    };

    const playNextAudio = () => {
        if (currentAudioIndex < sequenceUrls[instructionalAudioIndex - 1].length - 1) {
            setTimeout(() => {
                setCurrentAudioIndex(currentAudioIndex + 1);
            }, 1800);
        } else {
            setAudioPlayed(true);
        }
    };

    const submitHandler = () => {
        if (instructionalAudioIndex < instructionUrl.length) {
            setInstructionPlayed(false);
            setAudioPlayed(false);
        } else {
            navigate(ATTENTION_MATH);
        }
    };

    useEffect(() => {
        if (currentAudioIndex >= 0 && currentAudioIndex < sequenceUrls[instructionalAudioIndex - 1].length) {
            audioRef.current.src = sequenceUrls[instructionalAudioIndex - 1][currentAudioIndex];
            audioRef.current.play();
            audioRef.current.onended = playNextAudio;
        }
    }, [currentAudioIndex]);

    const startSequence = () => {
        setCurrentAudioIndex(0);
    };

    const handleClick = () => {
        console.log(sequenceUrls[0][currentAudioIndex]);
    };

    const handleMouseDown = () => {
        setIsButtonPressed(true);
    };

    const handleMouseUp = () => {
        setIsButtonPressed(false);
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Attention: Click on A</h1>
            <audio ref={audioRef} className={styles.hiddenAudio}>
                Your browser does not support the audio element.
            </audio>
            {!instructionPlayed && (
                <button onClick={playInstructionAudio} className={styles.button}>Play Instruction</button>
            )}
            {instructionPlayed && !audioPlayed && (
                <button onClick={startSequence} className={styles.button}>Start Sequence</button>
            )}
            <div>
                {audioPlayed && (
                    <button onClick={submitHandler} className={styles.button}>Submit</button>
                )}
                <button
                    onMouseDown={handleMouseDown}
                    onMouseUp={handleMouseUp}
                    onClick={handleClick}
                    className={isButtonPressed ? styles.buttonGreen : styles.button}
                >
                    Click
                </button>
            </div>
        </div>
    );
};

export default Attention_click;
