import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import AuthContext from '../../store/auth-context';

import List from '@mui/material/List';
import NavListItem from './NavListItem';
import LogoutButton from './LogoutButton';

const StyledList = styled(List)`
  align-items: center;
  display: flex;
  margin-left: auto;

  & a {
    text-decoration: none;
    color: white;
    margin: 0 1.5rem;

    &:hover {
      opacity: 0.75;
    }
  }
`;

const NavList = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;

  let navLinks;

  if (!isLoggedIn) {
    navLinks = <NavListItem text="Login" path="/material-ui-auth/auth" />;
  }

  if (isLoggedIn) {
    navLinks = (
      <React.Fragment>
        <NavListItem text="Profile" path="/material-ui-auth/profile" />
        <LogoutButton />
      </React.Fragment>
    );
  }

  return <StyledList>{navLinks}</StyledList>;
};

export default NavList;
