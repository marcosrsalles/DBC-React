import { createContext } from 'react';

export const LoginContext = createContext({
  isValidLogin: false,
  setLogin: () => {},
});

