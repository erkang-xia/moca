import React from 'react';
import { useNavigate } from 'react-router-dom';

const Test = () => {
  const navigate = useNavigate();

  const func = () => {
    navigate('/test/Q3');
  };

  return (
    <div>
      <button onClick={func}>click me</button>
    </div>
  );
};

export default Test;
