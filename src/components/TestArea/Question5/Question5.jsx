import styles from './Question5.module.css';
import React, { useState, useEffect } from 'react';

const useAudio = (url) => {
  //TODO: replace url
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Question5 = ({ question }) => {
  const [playing, toggle] = useAudio('/memory_intro.mp3');

  return (
    <div className={styles.question}>
      <h2>Question 5</h2>
      <button onClick={toggle}>{playing ? 'Pause' : 'Play'}</button>
    </div>
  );
};

export default Question5;
