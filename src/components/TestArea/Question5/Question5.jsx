import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LANGUAGE } from '../../../constants/clientRoute';
import styles from './Question5.module.css';

const useAudio = (urls) => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [audio, setAudio] = useState(new Audio(urls[currentTrackIndex]));
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    setAudio(new Audio(urls[currentTrackIndex])); // Create a new audio object whenever track changes
    return () => {
      audio.pause(); // Cleanup previous audio
    };
  }, [currentTrackIndex]);

  const toggle = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing, audio]);

  useEffect(() => {
    const handleEnd = () => {
      if (currentTrackIndex < urls.length - 1) {
        setTimeout(() => {
          setCurrentTrackIndex(currentTrackIndex + 1);
        }, 1000);
      } else {
        setPlaying(false); // Stop playing after last track
      }
    };
    audio.addEventListener('ended', handleEnd);
    return () => {
      audio.removeEventListener('ended', handleEnd);
    };
  }, [audio]);

  return [playing, toggle, currentTrackIndex];
};

const Question5 = ({ question }) => {
  const [playing, toggle, currentTrackIndex] = useAudio([
    '/church.mp3',
    '/daisy.mp3',
    '/face.mp3',
    '/red.mp3'
  ]);

  return (
      <div className={styles.question}>
        <h2>Question 5</h2>
        <button onClick={toggle} className={styles.playButton}>
          {playing ? 'Pause' : 'Play'}
        </button>
        <button className={styles.linkButton}>
          <Link to={LANGUAGE}>Next</Link>
        </button>
        <p className={styles.trackInfo}>Now playing track {currentTrackIndex + 1}</p>
      </div>
  );
};

export default Question5;
