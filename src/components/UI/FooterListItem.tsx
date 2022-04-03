import { styled, Theme } from '@mui/material/styles';
import { FooterListItemProps } from '../../models/types';
import useMediaQuery from '@mui/material/useMediaQuery';

import Icon from '@mui/material/Icon';
import Link from '@mui/material/Link';
import ListItem from '@mui/material/ListItem';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const StyledListItem = styled(ListItem)`
  display: flex;
  justify-content: center;

  &:hover {
    opacity: 0.5;
  }

  & a {
    text-decoration: none;
    display: flex;
    flex-direction: row;
  }

  & svg {
    margin-right: 0.5rem;
  }
`;

const FooterListItem = ({ tooltip, href, icon, text }: FooterListItemProps) => {
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.up('szm'));

  return (
    <StyledListItem>
      <Tooltip title={tooltip}>
        <Link href={href}>
          <Icon component={icon} />
          {hidden && (
            <Typography variant="subtitle1" component="h3" noWrap>
              {text}
            </Typography>
          )}
        </Link>
      </Tooltip>
    </StyledListItem>
  );
};

export default FooterListItem;
