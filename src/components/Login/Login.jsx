import React, { useState } from 'react';
import { useAuth } from '../../contexts/AuthContext';
import styles from './Login.module.css';

const Login = () => {
  const auth = useAuth();
  const [input, setInput] = useState({
    username: '',
    password: '',
    testId: auth.testId,
  });

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    console.log(input);
    if (input.username !== '' && input.password !== '') {
      auth.loginAction(input);
      return;
    }
    alert('please provide a valid input');
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <form onSubmit={handleSubmitEvent} className={styles.loginForm}>
            <h2 className={styles.formTitle}>Login</h2>
            <div className={styles.formControl}>
              <label htmlFor="user-email" className={styles.formLabel}>Email:</label>
              <input
                  type="email"
                  id="user-email"
                  name="username"
                  placeholder="example@yahoo.com"
                  aria-describedby="user-email"
                  aria-invalid="false"
                  onChange={handleInput}
                  className={styles.formInput}
              />
              <div id="user-email" className="sr-only">
                Please enter a valid username. It must contain at least 6 characters.
              </div>
            </div>
            <div className={styles.formControl}>
              <label htmlFor="password" className={styles.formLabel}>Password:</label>
              <input
                  type="password"
                  id="password"
                  name="password"
                  aria-describedby="user-password"
                  aria-invalid="false"
                  onChange={handleInput}
                  className={styles.formInput}
              />
              <div id="user-password" className="sr-only">
                Your password should be more than 6 characters.
              </div>
            </div>
            <button type="submit" className={styles.submitButton}>Submit</button>
          </form>
        </div>
        <div className={styles.rightSection}></div>
      </div>
  );
};

export default Login;
