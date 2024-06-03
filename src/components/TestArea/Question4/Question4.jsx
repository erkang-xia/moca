import React from 'react';
import styles from './Question4.module.css';
import Input from '../../Input/Input';

const Question4 = ({ question }) => {
  return (
    <div className={styles.question}>
      <h2>Question 4 Naming</h2>
      {console.log(question)}
      <p>Tell me the name of this animal.</p>
      <div className={styles.image_container}>
        <img
          src="https://thumbs.dreamstime.com/z/african-animals-illustration-what-made-ink-then-was-digitalized-african-animals-illustration-drawing-engraving-ink-line-art-107005556.jpg?ct=jpeg"
          alt="animal"
          width="300"
          height="300"
        />
        <div className={styles.input_container}>
          <Input />
          <button>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Question4;
