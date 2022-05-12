import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import { styled, Theme } from '@mui/material/styles';
import { UserDataObject } from '../../models/types';
import { StyledTypographyProps } from '../../models/types';
import useMediaQuery from '@mui/material/useMediaQuery';
import useFirebase from '../../hooks/useFirebase';
import ValidationSchema from '../../models/validationSchema';

import Button from '@mui/material/Button';
import Card from '../UI/Card';
import CircularProgress from '@mui/material/CircularProgress';
import EditIcon from '@mui/icons-material/Edit';
import Form from '../UI/Form';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const StyledTypography = styled(Typography)<StyledTypographyProps>`
  margin-top: 1.75rem;
  letter-spacing: 0.1rem;
`;

const StyledTextField = styled(TextField)`
  margin: 1rem 0;
`;

const StyledFormGroup = styled('div')`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const StyledIconButton = styled(IconButton)`
  background-color: #e1e2e1;
`;

const ProfileForm = () => {
  const [editFirstName, setEditFirstName] = useState(false);
  const [editLastName, setEditLastName] = useState(false);
  const [editEmail, setEditEmail] = useState(false);

  const minWidth = useMediaQuery((theme: Theme) => theme.breakpoints.up('szm'));
  const minHeight = useMediaQuery('@media(min-height: 934px)');

  const { accountSchema } = ValidationSchema;

  const {
    setValues,
    setFieldValue,
    handleChange,
    handleBlur,
    values,
    touched,
    errors,
  } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
    },
    validationSchema: accountSchema,
    onSubmit: () => {
      return;
    },
    validateOnBlur: true,
  });

  const { isLoading, isSending, getUserInfo, updateProfile, setNewPassword } =
    useFirebase();

  useEffect(() => {
    let isMounted = true;

    const getUserData = async () => {
      const userData = (await getUserInfo()) as UserDataObject;

      if (isMounted) {
        setValues({ ...userData, password: '' });
      }
    };

    getUserData();

    return () => {
      isMounted = false;
    };
  }, [getUserInfo, setValues]);

  const { firstName, lastName, email, password } = values;

  const firstNameToggleEditHandler = () => {
    setEditFirstName((prevState) => !prevState);
  };

  const lastNameToggleEditHandler = () => {
    setEditLastName((prevState) => !prevState);
  };

  const emailToggleEditHandler = () => {
    setEditEmail((prevState) => !prevState);
  };

  const updateProfileHandler = () => {
    updateProfile({
      firstName: firstName,
      lastName: lastName,
      email: email,
    }).then(() => {
      setEditFirstName(false);
      setEditLastName(false);
      setEditEmail(false);
    });
  };

  const updatePasswordHandler = async () => {
    setNewPassword(password).then(() => {
      setFieldValue('password', '');
      touched.password = false;
    });
  };

  const largeDevice = minWidth && minHeight;

  return (
    <Card
      headingType="h1"
      headingText={`${firstName}'s Profile`}
      headingSize="h4"
      wrapper="section"
    >
      <Form>
        <Icon component={ManageAccountsIcon} fontSize="large" />
        <StyledFormGroup>
          <StyledTextField
            id="firstName"
            name="firstName"
            type="text"
            label="First Name"
            value={firstName}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName && errors.firstName}
            disabled={!editFirstName}
            size={largeDevice ? 'medium' : 'small'}
            fullWidth
          />
          <InputAdornment position="end">
            <Tooltip title="Edit" placement="right">
              <StyledIconButton
                aria-label="toggle edit users first name"
                onClick={firstNameToggleEditHandler}
              >
                <EditIcon />
              </StyledIconButton>
            </Tooltip>
          </InputAdornment>
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledTextField
            id="lastName"
            name="lastName"
            type="text"
            label="Last Name"
            value={lastName}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.lastName && Boolean(errors.lastName)}
            helperText={touched.lastName && errors.lastName}
            disabled={!editLastName}
            size={largeDevice ? 'medium' : 'small'}
            fullWidth
          />
          <InputAdornment position="end">
            <Tooltip title="Edit" placement="right">
              <StyledIconButton
                aria-label="toggle edit users last name"
                onClick={lastNameToggleEditHandler}
              >
                <EditIcon />
              </StyledIconButton>
            </Tooltip>
          </InputAdornment>
        </StyledFormGroup>
        <StyledFormGroup>
          <StyledTextField
            id="email"
            name="email"
            type="email"
            label="Email"
            value={email}
            onBlur={handleBlur}
            onChange={handleChange}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
            disabled={!editEmail}
            size={largeDevice ? 'medium' : 'small'}
            fullWidth
          />
          <InputAdornment position="end">
            <Tooltip title="Edit" placement="right">
              <StyledIconButton
                aria-label="toggle edit users email"
                onClick={emailToggleEditHandler}
              >
                <EditIcon />
              </StyledIconButton>
            </Tooltip>
          </InputAdornment>
        </StyledFormGroup>
        {!isLoading && (
          <Button
            type="button"
            variant="contained"
            size={largeDevice ? 'large' : 'medium'}
            onClick={updateProfileHandler}
            fullWidth
          >
            Save Account Details
          </Button>
        )}
        {isLoading && <CircularProgress />}
        <StyledTypography component="h2" variant="h5">
          Set New Password
        </StyledTypography>
        <StyledTextField
          id="password"
          name="password"
          type="password"
          label="Password"
          value={password}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.password && Boolean(errors.password)}
          helperText={touched.password && errors.password}
          size={largeDevice ? 'medium' : 'small'}
          fullWidth
        />
        {!isSending && (
          <Button
            type="button"
            variant="contained"
            size={largeDevice ? 'large' : 'medium'}
            onClick={updatePasswordHandler}
            fullWidth
          >
            Save New Password
          </Button>
        )}
        {isSending && <CircularProgress />}
      </Form>
    </Card>
  );
};

export default ProfileForm;
