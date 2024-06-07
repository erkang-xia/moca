import React, { useState, useEffect, useRef } from 'react';
import {useNavigate} from "react-router-dom";
import {ATTENTION_CLICK, ATTENTION_MATH} from "../../../constants/clientRoute";

const Attention_click = () => {
    const instructionUrl = ["/d.mp3"]; // URL for the instruction audio
    const [instructionalAudioIndex, setInstructionalAudioIndex] = useState(0);
    const sequenceUrls = [["/a.mp3", "/b.mp3","/c.mp3","/a.mp3"]];
    const [currentAudioIndex, setCurrentAudioIndex] = useState(-1);
    const [instructionPlayed, setInstructionPlayed] = useState(false);
    const [audioPlayed, setAudioPlayed] = useState(false);
    const audioRef = useRef(null);
    const navigate = useNavigate();


    const playInstructionAudio = () => {
        audioRef.current.src = instructionUrl[instructionalAudioIndex];
        audioRef.current.play();
        audioRef.current.onended = () => {
            setInstructionPlayed(true);
            setInstructionalAudioIndex(instructionalAudioIndex+1)
        }
    };

    const playNextAudio = () => {
        console.log("playNextAudio");

        if (currentAudioIndex < sequenceUrls[instructionalAudioIndex-1].length - 1) {
            setTimeout(() => {
                console.log("hello")
                setCurrentAudioIndex(currentAudioIndex + 1);
            }, 1800);
        }else{
            setAudioPlayed(true);

        }
    };

    const submitHandler = () =>{
        //TODO: handle submit

        if(instructionalAudioIndex < instructionUrl.length){
            //handle state
            setInstructionPlayed(false);
            setAudioPlayed(false);
        }else{
            navigate(ATTENTION_MATH);

        }
    }

    useEffect(() => {
        if (currentAudioIndex >= 0 && currentAudioIndex < sequenceUrls[instructionalAudioIndex-1].length) {
            audioRef.current.src = sequenceUrls[instructionalAudioIndex-1][currentAudioIndex];
            audioRef.current.play();
            audioRef.current.onended = playNextAudio;
        }
    }, [currentAudioIndex]);

    const startSequence = () => {
        setCurrentAudioIndex(0);
    };

    const handleClick = () =>{
        console.log(sequenceUrls[0][currentAudioIndex]);
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
            {instructionPlayed && !audioPlayed &&(
                <button onClick={startSequence}>Start Sequence</button>
            )}
            <div>
                {audioPlayed && (<button onClick={submitHandler}> submit </button>)}
                <button onClick={handleClick}>click</button>
            </div>
        </div>
    );
};

export default Attention_click;
