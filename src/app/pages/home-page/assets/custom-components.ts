import { Box, styled } from '@mui/material';

export const SearchContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  rowGap: theme.spacing(2),
  marginBottom: theme.spacing(2),
  '& .MuiInputBase-input': {
    cursor: 'pointer',
  },
  [theme.breakpoints.up('sm')]: {
    flexDirection: 'row',
    columnGap: theme.spacing(2),
    '& .MuiFormControl-root': {
      width: 250,
    },
  },
}));

export const FiltersContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'wrap',
  '& > .MuiBox-root': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(2),
    width: '100%',
  },
  '& .MuiFormControlLabel-root': {
    boxSizing: 'border-box',
    marginRight: 0,
    paddingRight: theme.spacing(2),
    width: '50%',
  },
  '& .MuiFormControlLabel-label': {
    fontSize: 12,
  },
  [theme.breakpoints.up('sm')]: {
    '& .MuiFormControlLabel-root': {
      width: '25%',
    },
  },
  [theme.breakpoints.up('md')]: {
    '& > .MuiBox-root': {
      width: 'auto',
      marginTop: 0,
      marginLeft: 'auto',
    },
    '& .MuiFormControlLabel-root': {
      width: '22%',
    },
  },
}));
