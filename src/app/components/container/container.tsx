import { Container as ContianerComponent } from '@mui/material';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const Container = ({ children }: Props): JSX.Element => {
  return <ContianerComponent maxWidth="xl">{children}</ContianerComponent>;
};
