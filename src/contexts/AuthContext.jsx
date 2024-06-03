import { useContext, createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGIN_ENDPOINT } from '../constants/api';
import axios from '../api/axios';
import * as ROUTES from '../constants/clientRoute';
import Cookies from 'js-cookie';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();
  const loginAction = async (data) => {
    try {
      const response = await axios.post(LOGIN_ENDPOINT, JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
      });

      //TODO: design response
      if (response.data) {
        console.log(response.data.data);
        setUserId(response.data.data.name);
        console.log('AuthContext username:' + response.data.data.name);
        Cookies.set('token', response.data.data.token);
        //TODO: Design Structure
        console.log('success');
        navigate(ROUTES.QUESTION_2);
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
    <AuthContext.Provider value={{ userId, loginAction, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
