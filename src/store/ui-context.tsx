import React, { useState, useCallback } from 'react';
import { AlertStateObject, ContextProviderProps, ShowAlertFunction } from '../models/types';

export const UiContext = React.createContext<{
  alert: AlertStateObject | null;
  setAlert: React.Dispatch<React.SetStateAction<AlertStateObject | null>>;
  showAlert: ShowAlertFunction;
}>({
  alert: null,
  setAlert: () => {},
  showAlert: () => {},
});

export const UiContextProvider = ({ children }: ContextProviderProps) => {
  const [alert, setAlert] = useState<AlertStateObject | null>(null);

  const showAlert: ShowAlertFunction = useCallback(
    (type, message, error) => {
      let alertMessage = message;

      if (type === 'error' && error instanceof Error) {
        alertMessage = error.message;
      }

      setAlert({
        open: true,
        message: alertMessage,
        type: type,
      });
    },
    [setAlert]
  );

  const contextValue = {
    alert: alert,
    setAlert: setAlert,
    showAlert: showAlert,
  };

  return (
    <UiContext.Provider value={contextValue}>{children}</UiContext.Provider>
  );
};

export default UiContext;
