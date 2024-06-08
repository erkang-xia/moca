import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {ABSTRACTION} from "../../../constants/clientRoute";

const LanguageFluency = () => {
    const instructionUrl = "/language_intro3.mp3"; // URL for the instruction audio
    const [instructionPlayed, setInstructionPlayed] = useState(false);
    const [recording, setRecording] = useState(false);
    const [recordedAudio, setRecordedAudio] = useState(null);
    const [timer, setTimer] = useState(null);
    const audioRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const navigate = useNavigate();

    const playInstructionAudio = () => {
        audioRef.current.src = instructionUrl;
        audioRef.current.play();
        audioRef.current.onended = () => {
            setInstructionPlayed(true);
        };
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
                stream.getTracks().forEach(track => track.stop()); // Stop the stream to release the microphone
            };

            // Set timer for 60 seconds to stop recording automatically
            const timerId = setTimeout(() => {
                stopRecording();
            }, 6000);
            setTimer(timerId);
        });
        setRecording(true);
    };

    const stopRecording = () => {
        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
        }
        setRecording(false);
        if (timer) {
            clearTimeout(timer);
        }
    };

    const playRecordedAudio = () => {
        if (recordedAudio) {
            const audio = new Audio(recordedAudio);
            audio.play();
        }
    };

    useEffect(() => {
        // Cleanup the timer on component unmount
        return () => {
            if (timer) {
                clearTimeout(timer);
            }
        };
    }, [timer]);

    const submitHandler = () =>{
        navigate(ABSTRACTION)
    }

    return (
        <div>
            <h1>MOCA Test Simulation: Repeat the Sequence</h1>
            <audio ref={audioRef} style={{ display: 'none' }}>
                Your browser does not support the audio element.
            </audio>
            {!instructionPlayed && (
                <button onClick={playInstructionAudio}>Play Instruction</button>
            )}
            {instructionPlayed && (
                <h3>Words start with " B " </h3>
            )}

            <div>
                {instructionPlayed && !recordedAudio && (
                    <button onClick={startRecording} disabled={recording || recordedAudio}>
                        Start Recording
                    </button>
                )}
                {recordedAudio && (
                    <>
                        <button onClick={playRecordedAudio}>Play Recording</button>
                    </>
                )}

                {recordedAudio && (
                    <>
                        <button onClick={submitHandler}>submit</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default LanguageFluency;
