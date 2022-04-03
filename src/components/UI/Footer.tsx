import { styled, Theme } from '@mui/material/styles';
import { StyledTypographyProps } from '../../models/types';
import useMediaQuery from '@mui/material/useMediaQuery';

import FooterListItem from './FooterListItem';
import GitHubIcon from '@mui/icons-material/GitHub';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import WebIcon from '@mui/icons-material/Web';

const links = [
  {
    id: 1,
    text: 'My Portfolio',
    href: 'https://www.juleswoodwark.dev/',
    tooltip: 'My website',
    icon: WebIcon,
  },
  {
    id: 2,
    text: 'GitHub',
    href: 'https://github.com/jules-woodwark',
    tooltip: 'My GitHub profile',
    icon: GitHubIcon,
  },
];

const StyledFooter = styled('footer')`
  align-items: center;
  background-color: #f5f5f6;
  bottom: 0;
  display: flex;
  justify-content: center;
  position: fixed;
  width: 100%;
`;

const StyledList = styled(List)`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0.5rem;
`;

const StyledTypography = styled(Typography)<StyledTypographyProps>`
  flex-shrink: 0;
`;

const Footer = () => {
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.up('sx'));

  const linkMap = links.map((link) => (
    <FooterListItem
      key={link.id}
      tooltip={link.tooltip}
      href={link.href}
      icon={link.icon}
      text={link.text}
    />
  ));

  let copy = '\u00A9 2022';

  if (hidden) {
    copy = '\u00A9 Jules Woodwark 2022';
  }

  return (
    <StyledFooter>
      <StyledList>
        {linkMap}
        <ListItem>
          <StyledTypography variant="subtitle1" component="h3" noWrap>
            {copy}
          </StyledTypography>
        </ListItem>
      </StyledList>
    </StyledFooter>
  );
};

export default Footer;
