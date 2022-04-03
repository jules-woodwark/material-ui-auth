import { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import { StyledTypographyProps } from '../../models/types';

import List from '@mui/material/List';
import TechListItem from './TechListItem';
import Typography from '@mui/material/Typography';

const techList = [
  { text: 'Create React App', icon: 'logos:create-react-app' },
  { text: 'TypeScript', icon: 'logos:typescript-icon' },
  { text: 'Material UI', icon: 'logos:material-ui' },
  { text: 'Firebase', icon: 'logos:firebase' },
  { text: 'Jest', icon: 'vscode-icons:file-type-jest' },
  { text: 'React Router', icon: 'logos:react-router' },
];

const StyledList = styled(List)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 0.1rem;
`;

const StyledHeader = styled(Typography)<StyledTypographyProps>`
  letter-spacing: 0.1rem;
  margin-top: 1rem;
`;

const TechList = () => {
  const techListMap = techList.map((item, index) => (
    <TechListItem text={item.text} icon={item.icon} key={index} />
  ));

  return (
    <Fragment>
      <StyledHeader component="h2" variant="h5">
        Tools used:
      </StyledHeader>
      <StyledList>{techListMap}</StyledList>
    </Fragment>
  );
};

export default TechList;
