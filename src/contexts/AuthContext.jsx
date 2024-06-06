import { useContext, createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ENDPOINT } from '../constants/api';
import axios from '../api/axios';
import * as ROUTES from '../constants/clientRoute';
import Cookies from 'js-cookie';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  //TODO: Fix this bug, why its keep refreashing?? use effect? consider using useref
  const [userId, setUserId] = useState(null);
  const [testId, setTestId] = useState( crypto.randomUUID());

  console.log(testId)
  console.log("userid:" + userId);

  const navigate = useNavigate();
  const loginAction = async (data) => {
    try {
      const response = await axios.post(LOGIN_ENDPOINT, JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.data) {
        console.log(response.data.data);
        setUserId(response.data.data.id);
        console.log('AuthContext username:' + response.data.data.id);
        Cookies.set('token', response.data.data.token);

        console.log('success');
        navigate(ROUTES.QUESTION_1);
        return;
      }
      throw new Error(response.message);
    } catch (err) {
      console.error(err);
    }
  };

  const logOut = () => {
    setUserId(null);
    Cookies.remove('token');
    localStorage.removeItem('site');
    navigate(ROUTES.LOGIN);
  };

  return (
    <AuthContext.Provider value={{ userId, testId, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
