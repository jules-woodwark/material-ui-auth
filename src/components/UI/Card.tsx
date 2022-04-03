import { styled } from '@mui/material/styles';
import {
  CardProps,
  StyledCardProps,
  StyledTypographyProps,
} from '../../models/types';

import CardWrapper from '@mui/material/Card';
import Typography from '@mui/material/Typography';

const StyledCardWrapper = styled(CardWrapper)<StyledCardProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  overflow: auto;
  padding: 0.5rem;
  text-align: center;
  margin: 0 5%;

  ${(props) => props.theme.breakpoints.up('md')} {
    margin: 0 10%;
  }

  ${(props) => props.theme.breakpoints.up('lg')} {
    margin: 0 20%;
  }

  ${(props) => props.theme.breakpoints.up('xl')} {
    margin: 0 25%;
  }
`;

const StyledHeader = styled(Typography)<StyledTypographyProps>`
  letter-spacing: 0.1rem;
  margin: 0.5rem 0;
`;

const Card = ({
  children,
  headingType,
  headingText,
  headingSize,
  wrapper,
}: CardProps) => {
  return (
    <StyledCardWrapper component={wrapper}>
      <StyledHeader component={headingType} variant={headingSize}>
        {headingText}
      </StyledHeader>
      {children}
    </StyledCardWrapper>
  );
};

export default Card;
