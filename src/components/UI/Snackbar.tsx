import React, { useContext } from 'react';
import MuiAlert from '@mui/material/Alert';
import MuiSnackbar from '@mui/material/Snackbar';
import UiContext from '../../store/ui-context';

const Snackbar = () => {
  const uiCtx = useContext(UiContext);

  const { alert, setAlert } = uiCtx;

  const handleClose = () => {
    setAlert(null);
  };

  let alertReturn = null;

  if (alert) {
    alertReturn = (
      <MuiSnackbar
        open={alert.open}
        autoHideDuration={2000}
        onClose={handleClose}
      >
        <MuiAlert
          onClose={handleClose}
          elevation={10}
          variant="filled"
          severity={alert.type}
        >
          {alert.message}
        </MuiAlert>
      </MuiSnackbar>
    );
  }

  return alertReturn;
};

export default Snackbar;
