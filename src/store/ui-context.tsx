import React, { useState } from 'react';
import { AlertStateObject, ContextProviderProps } from '../models/types';

export const UiContext = React.createContext<{
  alert: AlertStateObject | null;
  setAlert: React.Dispatch<React.SetStateAction<AlertStateObject | null>>;
}>({
  alert: null,
  setAlert: () => {},
});

export const UiContextProvider = ({ children }: ContextProviderProps) => {
  const [alert, setAlert] = useState<AlertStateObject | null>(null);

  const contextValue = {
    alert: alert,
    setAlert: setAlert,
  };

  return (
    <UiContext.Provider value={contextValue}>{children}</UiContext.Provider>
  );
};

export default UiContext;
