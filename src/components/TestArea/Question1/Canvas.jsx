import React, { useState, useRef, useEffect } from 'react';
import styles from './Canvas.module.css';

const Canvas = () => {
  const canvasRef = useRef(null);
  const [dots, setDots] = useState([]);
  const [lines, setLines] = useState([]);
  const [clickSequence, setClickSequence] = useState([]);

  // Function to check if a new dot overlaps with existing dots
  const doesOverlap = (newDot, existingDots) => {
    const minDistance = 50; // Minimum distance between centers of dots
    for (let dot of existingDots) {
      const distance = Math.sqrt(
        (newDot.x - dot.x) ** 2 + (newDot.y - dot.y) ** 2
      );
      if (distance < minDistance) {
        return true; // Overlap found
      }
    }
    return false;
  };

  // Randomly generate dots within the canvas area ensuring no overlap
  useEffect(() => {
    const generateDots = () => {
      const tempDots = [];
      while (tempDots.length < 10) {
        // Generate 10 dots
        const newDot = {
          id: tempDots.length,
          label:
            tempDots.length % 2 === 0
              ? (tempDots.length / 2 + 1).toString()
              : String.fromCharCode(65 + (tempDots.length - 1) / 2),
          x: Math.random() * 260 + 20, // Adjust to ensure dots stay within bounds
          y: Math.random() * 260 + 20,
        };
        if (!doesOverlap(newDot, tempDots)) {
          tempDots.push(newDot);
        }
      }
      return tempDots;
    };
    setDots(generateDots());
  }, []);

  // Draw a line between dots when clicked in sequence
  useEffect(() => {
    const ctx = canvasRef.current.getContext('2d');
    ctx.clearRect(0, 0, 300, 300); // Clear previous lines
    lines.forEach((line) => {
      ctx.beginPath();
      ctx.moveTo(dots[line.start].x, dots[line.start].y);
      ctx.lineTo(dots[line.end].x, dots[line.end].y);
      ctx.stroke();
    });
  }, [lines, dots]);

  const handleClick = (dotId) => {
    const newSequence = [...clickSequence, dotId];
    setClickSequence(newSequence);
    if (newSequence.length > 1) {
      setLines([
        ...lines,
        { start: newSequence[newSequence.length - 2], end: dotId },
      ]);
    }
  };

  const habdleBack = () => {
    if (clickSequence.length > 0) {
      const newClickSequence = clickSequence.slice(0, clickSequence.length - 1);
      setClickSequence(newClickSequence);
    }
    if (lines.length > 0) {
      const newLines = lines.slice(0, lines.length - 1);
      setLines(newLines);
    }
  };

  return (
    <div className={styles.canvas_container}>
      <canvas ref={canvasRef} width="300" height="300" />
      {dots.map((dot) => (
        <button
          className={`${styles.canvas_button_base} ${
            clickSequence.includes(dot.id)
              ? styles.canvas_button_clicked
              : styles.canvas_button
          }`}
          key={dot.id}
          style={{
            left: dot.x,
            top: dot.y,
          }}
          onClick={() => handleClick(dot.id)}
        >
          {dot.label}
        </button>
      ))}

      <button onClick={() => habdleBack()}> back </button>
      <button> submit </button>
    </div>
  );
};

export default Canvas;
