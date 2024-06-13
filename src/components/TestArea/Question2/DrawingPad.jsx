import React, { useRef, useEffect, useState } from 'react';
import { useAuth } from "../../../contexts/AuthContext";
import axios from "../../../api/axios";
import { useNavigate } from "react-router-dom";
import styles from './DrawingPad.module.css';

const DrawingPad = ({ question, path, type }) => {
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [image, setImage] = useState(null);
  const navigate = useNavigate();
  const testId = useAuth().testId;

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = 500;
    canvas.height = 350;

    const context = canvas.getContext('2d');
    context.lineCap = 'round';
    context.strokeStyle = '#13598B';
    context.lineWidth = 2;
    contextRef.current = context;

    // Draw the loaded image if available
    if (image) {
      context.drawImage(image, 0, 0, canvas.width, canvas.height);
    }
  }, [image]);

  const handleImageUpload = event => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const img = new Image();
        img.onload = () => setImage(img);
        img.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

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
    setImage(null); // Clear the image state as well
  };

  const saveCanvas = async () => {
    const canvas = canvasRef.current;
    canvas.toBlob(async (blob) => {
      const formData = new FormData();
      formData.append('file', blob, `${testId}_${type}.png`);

      try {
        await axios.post(`${path}/${testId}`, formData);
        console.log('Image uploaded successfully');
        navigate(question);
      } catch (error) {
        console.error('Error uploading image:', error.response ? error.response.data : error.message);
      }
    }, 'image/png');
  };

  return (
      <div className={styles.canvasContainer}>
        <canvas
            onMouseDown={startDrawing}
            onMouseUp={stopDrawing}
            onMouseMove={draw}
            onMouseOut={stopDrawing}
            ref={canvasRef}
        />

        <div className={styles.buttonGroup}>
          <button onClick={clearCanvas} className={styles.clearButton}>Clear</button>
          <div>
            <input
                type="file"
                onChange={handleImageUpload}
                style={{display: 'none'}} // Hide the default file input
                id="fileInput"
                accept="image/*" // Restrict file type to images
            />
            <label htmlFor="fileInput" className={styles.uploadButton}>
              Upload Image
            </label>
            <button onClick={saveCanvas} className={styles.uploadButton}>Upload</button>
          </div>
        </div>
      </div>
  );
};

export default DrawingPad;
