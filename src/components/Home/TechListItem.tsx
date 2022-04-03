import { Fragment } from 'react';
import { styled } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import { TechListItemProps } from '../../models/types';

import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const StyledListItem = styled(ListItem)`
  padding: 0.2rem 0;
`;

const StyledIcon = styled(Icon)`
  font-size: 1.5rem;
  margin: 0 0.75rem;

  &:hover {
    opacity: 0.5;
    transition: opacity 0.1s ease-in-out;
  }
`;

const TechListItem = ({ icon, text }: TechListItemProps) => {
  return (
    <Fragment>
      <StyledListItem>
        <StyledIcon icon={icon} />
        <ListItemText>{text}</ListItemText>
      </StyledListItem>
      <Divider />
    </Fragment>
  );
};

export default TechListItem;
