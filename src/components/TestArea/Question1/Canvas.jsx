// import React, { useState, useRef, useEffect } from 'react';
// import styles from './Canvas.module.css';
// import axios from '../../../api/axios';
// import { TRAILMAKING } from '../../../constants/api';
// import {useNavigate} from "react-router-dom";
// import {QUESTION_2} from "../../../constants/clientRoute";
// import { useAuth } from '../../../contexts/AuthContext';
//
// const Canvas = () => {
//   const canvasRef = useRef(null);
//   const [dots, setDots] = useState([]);
//   const [lines, setLines] = useState([]);
//   const [clickSequence, setClickSequence] = useState([]);
//   const navigate = useNavigate();
//   const testId = useAuth().testId;
//
//   // Function to check if a new dot overlaps with existing dots
//   const doesOverlap = (newDot, existingDots) => {
//     const minDistance = 50; // Minimum distance between centers of dots
//     for (let dot of existingDots) {
//       const distance = Math.sqrt(
//         (newDot.x - dot.x) ** 2 + (newDot.y - dot.y) ** 2
//       );
//       if (distance < minDistance) {
//         return true; // Overlap found
//       }
//     }
//     return false;
//   };
//
//   // Randomly generate dots within the canvas area ensuring no overlap
//   useEffect(() => {
//     const generateDots = () => {
//       const tempDots = [];
//       while (tempDots.length < 10) {
//         // Generate 10 dots
//         const newDot = {
//           id: tempDots.length,
//           label:
//             tempDots.length % 2 === 0
//               ? (tempDots.length / 2 + 1).toString()
//               : String.fromCharCode(65 + (tempDots.length - 1) / 2),
//           x: Math.floor(Math.random() * 260) + 20, // Adjust to ensure dots stay within bounds
//           y: Math.floor(Math.random() * 260) + 20,
//         };
//         if (!doesOverlap(newDot, tempDots)) {
//           tempDots.push(newDot);
//         }
//       }
//       return tempDots;
//     };
//
//     setDots(generateDots());
//   }, []);
//
//   // Draw a line between dots when clicked in sequence
//   useEffect(() => {
//     const ctx = canvasRef.current.getContext('2d');
//     ctx.clearRect(0, 0, 300, 300); // Clear previous lines
//     lines.forEach((line) => {
//       ctx.beginPath();
//       ctx.moveTo(dots[line.start].x, dots[line.start].y);
//       ctx.lineTo(dots[line.end].x, dots[line.end].y);
//       ctx.stroke();
//     });
//   }, [lines, dots]);
//
//   const handleClick = (dotId) => {
//     const newSequence = [...clickSequence, dotId];
//     setClickSequence(newSequence);
//     if (newSequence.length > 1) {
//       setLines([
//         ...lines,
//         { start: newSequence[newSequence.length - 2], end: dotId },
//       ]);
//     }
//   };
//
//   const handleBack = () => {
//     if (clickSequence.length > 0) {
//       const newClickSequence = clickSequence.slice(0, clickSequence.length - 1);
//       setClickSequence(newClickSequence);
//     }
//     if (lines.length > 0) {
//       const newLines = lines.slice(0, lines.length - 1);
//       setLines(newLines);
//     }
//   };
//
//   const handleSubmit = async () => {
//     const data = {  testId, dots, lines, clickSequence };
//     try {
//       const response = await axios.post(TRAILMAKING, data, {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         withCredentials: true,
//       });
//       if (response.data.code === 1) {
//         navigate(QUESTION_2);
//
//       }
//
//
//     } catch (error) {
//       console.error('Error sending data to backend:', error);
//     }
//   };
//
//   return (
//     <div className={styles.canvas_container}>
//       <canvas ref={canvasRef} width="300" height="300" />
//       {dots.map((dot) => (
//         <button
//           className={`${styles.canvas_button_base} ${
//             clickSequence.includes(dot.id)
//               ? styles.canvas_button_clicked
//               : styles.canvas_button
//           }`}
//           key={dot.id}
//           style={{
//             left: dot.x,
//             top: dot.y,
//           }}
//           onClick={() => handleClick(dot.id)}
//         >
//           {dot.label}
//         </button>
//       ))}
//
//       <button onClick={() => handleBack()}> back </button>
//       <button onClick={() => handleSubmit()}> submit </button>
//     </div>
//   );
// };
//
// export default Canvas;
//
//
import React, { useState, useRef, useEffect } from 'react';
import styles from './Canvas.module.css';
import axios from '../../../api/axios';
import { TRAILMAKING } from '../../../constants/api';
import { useNavigate } from 'react-router-dom';
import { QUESTION_2 } from "../../../constants/clientRoute";
import { useAuth } from '../../../contexts/AuthContext';

const Canvas = () => {
  const canvasRef = useRef(null);
  const [dots, setDots] = useState([]);
  const [lines, setLines] = useState([]);
  const [clickSequence, setClickSequence] = useState([]);
  const navigate = useNavigate();
  const testId = useAuth().testId;

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
          x: Math.floor(Math.random() * 260) + 20, // Adjust to ensure dots stay within bounds
          y: Math.floor(Math.random() * 260) + 20,
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

  const handleBack = () => {
    if (clickSequence.length > 0) {
      const newClickSequence = clickSequence.slice(0, clickSequence.length - 1);
      setClickSequence(newClickSequence);
    }
    if (lines.length > 0) {
      const newLines = lines.slice(0, lines.length - 1);
      setLines(newLines);
    }
  };

  const handleSubmit = async () => {
    const data = { testId, dots, lines, clickSequence };
    try {
      const response = await axios.post(TRAILMAKING, data, {
        headers: {
          'Content-Type': 'application/json',
        },
        withCredentials: true,
      });
      if (response.data.code === 1) {
        navigate(QUESTION_2);
      }
    } catch (error) {
      console.error('Error sending data to backend:', error);
    }
  };

  return (
      <div className={styles.canvasContainer}>
        <canvas ref={canvasRef} width="300" height="300" />
        {dots.map((dot) => (
            <button
                className={`${styles.canvasButtonBase} ${
                    clickSequence.includes(dot.id)
                        ? styles.canvasButtonClicked
                        : styles.canvasButton
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

        <div className={styles.buttonGroup}>
          <button onClick={handleBack} className={styles.backButton}>Back</button>
          <button onClick={handleSubmit} className={styles.submitButton}>Submit</button>
        </div>
      </div>
  );
};

export default Canvas;
