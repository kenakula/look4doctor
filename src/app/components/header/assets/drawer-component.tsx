import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { HeaderMenu } from 'app/shared/types';
import { HOME_PAGE } from 'app/router';
import { CustomDrawer, ListItemLink } from './custom-components';

interface Props {
  handleDrawerToggle: () => void;
  openState: boolean;
  menuLinks?: HeaderMenu[];
}

export const DrawerComponent = ({
  handleDrawerToggle,
  menuLinks,
  openState,
}: Props): JSX.Element => (
  <CustomDrawer
    variant="temporary"
    open={openState}
    onClose={handleDrawerToggle}
    ModalProps={{
      keepMounted: true,
    }}
  >
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 3 }}>
        Look4Doctor
      </Typography>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemLink component={NavLink} to={HOME_PAGE}>
            <ListItemText primary="Главная" />
          </ListItemLink>
        </ListItem>
        {menuLinks &&
          menuLinks
            .filter(({ show_on_page }) => show_on_page)
            .map(({ name, url }) => (
              <ListItem key={url} disablePadding>
                <ListItemLink component={NavLink} to={`/${url}`}>
                  <ListItemText primary={name} />
                </ListItemLink>
              </ListItem>
            ))}
      </List>
    </Box>
  </CustomDrawer>
);
