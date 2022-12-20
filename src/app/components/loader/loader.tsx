import { Box, CircularProgress, styled } from '@mui/material';

const LoaderWrapper = styled(Box)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
});

interface Props {
  size?: number;
}

export const Loader = ({ size = 20 }: Props): JSX.Element => {
  return (
    <LoaderWrapper>
      <CircularProgress size={size} color="primary" />
    </LoaderWrapper>
  );
};
