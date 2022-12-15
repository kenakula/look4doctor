import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Drawer,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { HeaderMenu } from 'app/shared/types';

const drawerWidth = 240;

interface Props {
  handleDrawerToggle: () => void;
  openState: boolean;
  menuLinks?: HeaderMenu[];
}

const DrawerComponent = ({
  handleDrawerToggle,
  menuLinks,
  openState,
}: Props): JSX.Element => {
  return (
    <Drawer
      variant="temporary"
      open={openState}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true,
      }}
      sx={{
        display: { xs: 'block', md: 'none' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth,
        },
      }}
    >
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
    </Drawer>
  );
};

export default DrawerComponent;
