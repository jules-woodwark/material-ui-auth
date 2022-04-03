import { NavLink } from 'react-router-dom';
import { NavListItemProps } from '../../models/types';

import Typography from '@mui/material/Typography';

const NavListItem = ({ text, path }: NavListItemProps) => {
  return (
    <Typography variant="h5" component="li">
      <NavLink to={path}>{text}</NavLink>
    </Typography>
  );
};

export default NavListItem;
