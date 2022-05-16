import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import Button from '@mui/material/Button';
import Card from '../UI/Card';
import TechList from './TechList';
import Typography from '@mui/material/Typography';

const StyledTypography = styled(Typography)`
  margin: 0.75rem 1rem;
`;

const StyledButton = styled(Button)`
  margin: 0.5rem 0;
`;

const Home = () => {
  const navigate = useNavigate();
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.up('md'));

  const signupHandler = () => {
    navigate('/auth');
  };

  return (
    <Fragment>
      <Card
        headingType="h1"
        headingText="About"
        headingSize="h4"
        wrapper="section"
      >
        <StyledTypography variant="subtitle1" align="left">
          Hi, welcome to Material UI Auth, a simple React application built with
          Create React App and Material UI. This application has a protected
          route, "/profile", which can only be accessed when a user is
          validated.
        </StyledTypography>
        <StyledTypography variant="subtitle1" align="left">
          Sign-up with valid details to create an account. Sign-in with valid
          details to access your profile page. Once you have successfully logged
          in, you can update your account details on your profile page. Form
          validation is handled with Formik & Yup. This app uses Firebase for
          auth persistance, you will be automatically logged out after 1 hour.
        </StyledTypography>
        {hidden && <TechList />}
        <StyledButton variant="contained" onClick={signupHandler}>
          Sign Up
        </StyledButton>
      </Card>
    </Fragment>
  );
};

export default Home;
