import { Box, styled, Typography } from '@mui/material';
import { getImageLink } from 'app/shared/assets';
import { Container } from '../container/container';

const BannerContainer = styled(Box, {
  shouldForwardProp: prop => prop !== 'image',
})<{ image: string | undefined }>(({ theme, image }) => ({
  position: 'relative',
  display: 'flex',
  paddingBottom: theme.spacing(4),
  marginBottom: theme.spacing(4),
  minHeight: '250px',
  backgroundImage: image ? `url(${image})` : undefined,
  backgroundSize: 'cover',
  backgroundPosition: 'center right',
  '&::before': {
    content: '""',
    display: 'block',
    position: 'absolute',
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    background:
      'linear-gradient(90deg, rgba(250,250,250,0) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0.5) 74%, rgba(0,0,0,0.7) 90%, rgba(0,0,0,0.8) 100%)',
  },
  '& .MuiContainer-root': {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  '& .MuiTypography-root': {
    position: 'relative',
    maxWidth: '310px',
    fontSize: '2rem',
    fontWeight: 700,
    color: '#ffffff',
    textAlign: 'right',
  },
  [theme.breakpoints.up('sm')]: {
    minHeight: '350px',
    '& .MuiTypography-root': {
      fontSize: '3.2rem',
      maxWidth: '460px',
    },
  },
  [theme.breakpoints.up('lg')]: {
    '& .MuiTypography-root': {
      maxWidth: '690px',
      fontSize: '4.2rem',
    },
  },
}));

interface Props {
  title?: string;
  imageId?: string;
}

export const TopBanner = ({ title, imageId }: Props): JSX.Element => {
  const topBannerImagePath = imageId
    ? getImageLink(imageId, 'top-banner.jpg')
    : undefined;

  return (
    <BannerContainer component="section" image={topBannerImagePath}>
      <Container>
        {title && (
          <Typography
            variant="h1"
            dangerouslySetInnerHTML={{ __html: title }}
          />
        )}
      </Container>
    </BannerContainer>
  );
};
