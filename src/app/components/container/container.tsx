import {
  Breakpoint,
  Container as ContianerComponent,
  SxProps,
} from '@mui/material';
import React from 'react';

interface Props {
  children: React.ReactNode;
  styles?: SxProps;
  maxWidth?: Breakpoint;
}

export const Container = ({
  children,
  styles,
  maxWidth = 'xl',
}: Props): JSX.Element => {
  return (
    <ContianerComponent maxWidth={maxWidth} sx={styles}>
      {children}
    </ContianerComponent>
  );
};
