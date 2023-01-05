import { styled, SxProps, Typography } from '@mui/material';
import { TitleVariant } from 'app/shared/types';

const CustomTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  fontSize: 32,
  [theme.breakpoints.up('sm')]: {
    fontSize: 42,
  },
  [theme.breakpoints.up('lg')]: {
    marginBottom: theme.spacing(4),
  },
}));

interface Props {
  text: string;
  variant: TitleVariant;
  centered?: boolean;
  styles?: SxProps;
}

export const PageTitle = ({
  text,
  variant,
  centered = false,
  styles,
}: Props): JSX.Element => {
  return (
    <CustomTitle
      variant={variant}
      textAlign={centered ? 'center' : undefined}
      sx={styles}
    >
      {text}
    </CustomTitle>
  );
};
