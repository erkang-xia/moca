import React, { useEffect } from 'react';
import { useAuth } from '../../contexts/AuthContext';

const Logout = () => {
  const auth = useAuth();
  return (
    <div className="container">
      <button onClick={() => auth.logOut()} className="btn-submit">
        logout
      </button>
    </div>
  );
};

export default Logout;
