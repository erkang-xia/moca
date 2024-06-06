import React, { useRef, useEffect, useState } from 'react';
import {useAuth} from "../../../contexts/AuthContext";
import axios from "../../../api/axios";
import {useNavigate} from "react-router-dom";


const DrawingPad = ({question, path, type}) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const navigate = useNavigate();
  const testId = useAuth().testId;

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth; // Scale canvas pixel density
    canvas.height = window.innerHeight;
    canvas.style.width = `${window.innerWidth / 2}px`;
    canvas.style.height = `${window.innerHeight / 2}px`;

    const context = canvas.getContext('2d');
    context.scale(2, 2); // Scale context to adjust for canvas density scaling
    context.lineCap = 'round';
    context.strokeStyle = 'black';
    context.lineWidth = 5;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) {
      return;
    }
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  const saveCanvas = () => {
    const canvas = canvasRef.current;
    /**save to local
     *
     */
    // const dataURL = canvas.toDataURL('image/png');
    // const link = document.createElement('a');
    // link.href = dataURL;
    // link.download = 'drawing.png';
    // link.click();

    canvas.toBlob(async (blob) => {
      const formData = new FormData();
      formData.append('file', blob, `${testId}_${type}.png`);

      try {
        await axios.post(`${path}/${testId}`, formData);
        console.log('Image uploaded successfully');
        navigate(question)
      } catch (error) {
        console.error('Error uploading image:', error.response ? error.response.data : error.message);
      }
    }, 'image/png');
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <canvas
        onMouseDown={startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        onMouseOut={stopDrawing}
        ref={canvasRef}
        style={{ border: '1px solid black' }}
      />
      <div style={{ marginTop: '10px' }}>
        <button onClick={clearCanvas}>Clear</button>
        <button onClick={saveCanvas}>Save as Image</button>
      </div>
    </div>
  );
};

export default DrawingPad;
