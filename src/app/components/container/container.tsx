import { Container as ContianerComponent, SxProps } from '@mui/material';
import React from 'react';

interface Props {
  children: React.ReactNode;
  styles?: SxProps;
}

export const Container = ({ children, styles }: Props): JSX.Element => {
  return (
    <ContianerComponent maxWidth="xl" sx={styles}>
      {children}
    </ContianerComponent>
  );
};
