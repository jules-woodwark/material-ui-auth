import { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import { LayoutProps } from '../../models/types';

import Box from '@mui/material/Box';
import Footer from './Footer';
import Header from './Header';
import Snackbar from './Snackbar';

const StyledMain = styled(Box)`
  align-items: center;
  background-color: #e1e2e1;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0;
  padding: 70px 0;
  max-width: 100%;
`;

const Layout = (props: LayoutProps) => {
  return (
    <Fragment>
      <Header />
      <StyledMain component="main">{props.children}</StyledMain>
      <Footer />
      <Snackbar />
    </Fragment>
  );
};

export default Layout;
