import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import {ATTENTION_MAIN} from "../../../constants/clientRoute";
import styles from './Memory.module.css'; // Importing CSS module

const Memory = () => {
    const instructionUrl = "/memory_intro.mp3"; // URL for the instruction audio
    const sequenceUrls = ["/daisy.mp3", "/face.mp3", "/red.mp3", "/velvet.mp3", "/church.mp3"];
    const [currentAudioIndex, setCurrentAudioIndex] = useState(-1);
    const [instructionPlayed, setInstructionPlayed] = useState(false);
    const [audioPlayed, setAudioPlayed] = useState(false);
    const [recording, setRecording] = useState(false);
    const [recordedAudio, setRecordedAudio] = useState(null);
    const audioRef = useRef(null);
    const mediaRecorderRef = useRef(null);

    const playInstructionAudio = () => {
        audioRef.current.src = instructionUrl;
        audioRef.current.play();
        audioRef.current.onended = () => setInstructionPlayed(true);
    };

    const playNextAudio = () => {
        if (currentAudioIndex < sequenceUrls.length - 1) {
            setTimeout(() => {
                setCurrentAudioIndex(currentAudioIndex + 1);
            }, 1000);
        } else {
            setAudioPlayed(true);
        }
    };

    useEffect(() => {
        if (currentAudioIndex >= 0 && currentAudioIndex < sequenceUrls.length) {
            audioRef.current.src = sequenceUrls[currentAudioIndex];
            audioRef.current.play();
            audioRef.current.onended = playNextAudio;
        }
    }, [currentAudioIndex]);

    const startSequence = () => {
        setCurrentAudioIndex(0);
    };

    const startRecording = () => {
        navigator.mediaDevices.getUserMedia({ audio: true }).then(stream => {
            const mediaRecorder = new MediaRecorder(stream);
            mediaRecorderRef.current = mediaRecorder;
            mediaRecorder.start();
            const chunks = [];

            mediaRecorder.ondataavailable = e => chunks.push(e.data);
            mediaRecorder.onstop = () => {
                const blob = new Blob(chunks, { type: 'audio/mp3' });
                const audioUrl = URL.createObjectURL(blob);
                setRecordedAudio(audioUrl);
            };
        });
        setRecording(true);
    };

    const stopRecording = () => {
        mediaRecorderRef.current?.stop();
        setRecording(false);
    };

    const playRecordedAudio = () => {
        if (recordedAudio) {
            const audio = new Audio(recordedAudio);
            audio.play();
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>MOCA Test Simulation: Repeat the Sequence</h1>
            <audio ref={audioRef} className={styles.hiddenAudio}>
                Your browser does not support the audio element.
            </audio>
            {!instructionPlayed && (
                <button onClick={playInstructionAudio} className={styles.button}>Play Instruction</button>
            )}
            {instructionPlayed && currentAudioIndex === -1 && (
                <button onClick={startSequence} className={styles.button}>Start Sequence</button>
            )}
            <div>
                {audioPlayed && (
                    <>
                        <button onClick={startRecording} disabled={recording} className={recording ? styles.buttonDisabled : styles.button}>
                            Start Recording
                        </button>
                        <button onClick={stopRecording} disabled={!recording} className={!recording ? styles.buttonDisabled : styles.button}>
                            Stop Recording
                        </button>
                        <button onClick={playRecordedAudio} disabled={!recordedAudio} className={!recordedAudio ? styles.buttonDisabled : styles.button}>
                            Play Recording
                        </button>
                        <button className={styles.buttonLink}>
                            <Link to={ATTENTION_MAIN}>Submit</Link>
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Memory;
