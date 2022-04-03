import { useContext, useCallback } from 'react';
import { ShowAlertFunction } from '../models/types';
import UiContext from '../store/ui-context';

const useAlert = () => {
  const uiCtx = useContext(UiContext);
  const { setAlert } = uiCtx;

  const showAlert: ShowAlertFunction = useCallback(
    (type, message, error) => {
      let errorMessage: string | undefined;

      if (type === 'error') {
        errorMessage = message;

        if (error instanceof Error) {
          errorMessage = error.message;
        }
      }

      setAlert({
        open: true,
        message: errorMessage ? errorMessage : message,
        type: type,
      });
    },
    [setAlert]
  );

  return {
    showAlert: showAlert,
  };
};

export default useAlert;
