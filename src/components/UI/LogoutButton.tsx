import { styled } from '@mui/material/styles';
import useFirebase from '../../hooks/use-firebase';

import Button from '@mui/material/Button';

const StyledButton = styled(Button)`
  &:hover {
    background-color: #4dabf5;
  }
`;

const LogoutButton = () => {
  const { logout } = useFirebase();

  const logoutHandler = () => {
    logout();
  };

  return (
    <StyledButton
      variant="outlined"
      color="inherit"
      size="large"
      onClick={logoutHandler}
    >
      Logout
    </StyledButton>
  );
};

export default LogoutButton;
