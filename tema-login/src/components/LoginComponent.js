import { LoginContext } from './../context/loginContext';
import Login from './../pages/login/Login';
import { useState } from 'react';

function LoginComponent() {
  const [login, setLogin] = useState({ isValidLogin: false });
  const value = { login, setLogin };

  return (
    <LoginContext.Provider value={value}>
      <Login />
      {JSON.stringify(login)}
    </LoginContext.Provider>
  );
}

export default LoginComponent;
