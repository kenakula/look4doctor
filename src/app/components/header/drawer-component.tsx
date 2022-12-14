import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { HeaderMenu } from 'app/shared/types';

interface Props {
  handleDrawerToggle: () => void;
  menuLinks?: HeaderMenu[];
}

const DrawerComponent = ({
  handleDrawerToggle,
  menuLinks,
}: Props): JSX.Element => {
  return (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 3 }}>
        Look4Doctor
      </Typography>
      <Divider />
      <List>
        {menuLinks &&
          menuLinks
            .filter(({ show_on_page }) => show_on_page)
            .map(({ name, url }) => (
              <ListItem key={url} disablePadding>
                <ListItemButton
                  sx={{ textAlign: 'center' }}
                  component={NavLink}
                  to={`/${url}`}
                >
                  <ListItemText primary={name} />
                </ListItemButton>
              </ListItem>
            ))}
      </List>
    </Box>
  );
};

export default DrawerComponent;
