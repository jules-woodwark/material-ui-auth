import { styled, Theme } from '@mui/material/styles';
import {
  StyledToolbarProps,
  StyledTypographyProps,
} from '../../models/types';
import useMediaQuery from '@mui/material/useMediaQuery';

import AndroidIcon from '@mui/icons-material/Android';
import AppBar from '@mui/material/AppBar';
import NavList from './NavList';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const StyledToolbar = styled(Toolbar)<StyledToolbarProps>`
  border-top: 6px solid #004c8b;
  max-width: 100%;
`;

const StyledHeader = styled(Typography)<StyledTypographyProps>`
  margin-left: 1rem;

  ${(props) => props.theme.breakpoints.down('sm')} {
    font-size: 1.5rem;
  }
`;

const Header = () => {
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.up('sx'));

  return (
    <AppBar>
      <StyledToolbar component="nav" color="primary">
        <AndroidIcon fontSize="large" />
        {hidden && (
          <StyledHeader variant="h4" component="h1">
            Material UI Auth
          </StyledHeader>
        )}
        <NavList />
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
