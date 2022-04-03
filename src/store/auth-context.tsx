import React, { useState, useEffect } from 'react';
import { User, ContextProviderProps } from '../models/types';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase-config';

export const AuthContext = React.createContext<{
  user?: User | null;
  isLoggedIn?: boolean;
}>({
  user: null,
  isLoggedIn: false,
});

export const AuthContextProvider = ({ children }: ContextProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const userIsLoggedIn = !!user;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (fbUser) => {
      if (fbUser) {
        const { uid } = fbUser;
        setUser({ uid: uid });
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const contextValue = {
    user: user,
    isLoggedIn: userIsLoggedIn,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export default AuthContext;
