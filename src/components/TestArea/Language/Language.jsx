import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from "react-router-dom";
import { LANGUAGE_FLUENCY } from "../../../constants/clientRoute";
import styles from './Language.module.css'; // Importing CSS module

const Language = () => {
    const instructionUrl = ["/language_intro1.mp3", "/language_intro2.mp3"]; // URL for the instruction audio
    const [instructionalAudioIndex, setInstructionalAudioIndex] = useState(0);
    const sequenceUrls = [["/sentence_example1.mp3"], ["/sentence_example2.mp3"]];
    const [currentAudioIndex, setCurrentAudioIndex] = useState(-1);
    const [instructionPlayed, setInstructionPlayed] = useState(false);
    const [audioPlayed, setAudioPlayed] = useState(false);
    const [recording, setRecording] = useState(false);
    const [recordedAudio, setRecordedAudio] = useState(null);
    const audioRef = useRef(null);
    const mediaRecorderRef = useRef(null);
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
            }, 1000);
        } else {
            setAudioPlayed(true);
        }
    };

    const submitHandler = () => {
        // TODO: handle submit


        setCurrentAudioIndex(-1);

        if (instructionalAudioIndex < instructionUrl.length) {
            // handle state
            setInstructionPlayed(false);
            setAudioPlayed(false);
        } else {
            navigate(LANGUAGE_FLUENCY);
        }
    };

    useEffect(() => {
        console.log("useeffect called ")
        if (currentAudioIndex >= 0 && currentAudioIndex < sequenceUrls[instructionalAudioIndex - 1].length) {
            audioRef.current.src = sequenceUrls[instructionalAudioIndex - 1][currentAudioIndex];
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
            <h1 className={styles.title}>Language: Repeat Sentence</h1>
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
                        <button onClick={submitHandler} className={styles.button}>Submit</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default Language;
