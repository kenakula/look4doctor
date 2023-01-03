import { useState } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
} from '@mui/material';
import NearMeIcon from '@mui/icons-material/NearMe';
import { ICity } from 'app/shared/types';
import {
  LocationButton,
  LocationListItem,
  LocationsList,
} from './custom-components';
import CheckIcon from '@mui/icons-material/Check';
import {
  setCurrentLocationFromSelect,
  useAppDispatch,
  useAppSelector,
} from 'app/store';
import { ModalDialog } from 'app/components/modal-dialog/modal-dialog';
import { useCurrentRegion } from '../hooks';

interface Props {
  location: ICity;
}

export const LocationSelector = ({ location }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const [modalOpenState, setModalOpenState] = useState(false);
  const { cities, regions, currentLocation } = useAppSelector(
    state => state.location,
  );
  const { currentRegionId, filteredCities, handleRegionChange } =
    useCurrentRegion(cities, currentLocation);

  const handleModalClose = (): void => {
    setModalOpenState(false);
  };

  const handleModalOpen = (): void => {
    setModalOpenState(true);
  };

  const handleClickCity = (city: ICity): void => {
    dispatch(setCurrentLocationFromSelect(city));
    setModalOpenState(false);
  };

  return (
    <Box>
      <LocationButton
        size="small"
        startIcon={<NearMeIcon fontSize="small" />}
        color="inherit"
        onClick={handleModalOpen}
      >
        {location.name}
      </LocationButton>
      <ModalDialog
        openState={modalOpenState}
        handleClose={handleModalClose}
        dialogTitle="Выберите город"
        maxWidth="sm"
      >
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            {currentLocation ? (
              <FormControl variant="standard" sx={{ width: '100%' }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Регион
                </InputLabel>
                <Select<number>
                  value={currentRegionId}
                  label="Регион"
                  onChange={handleRegionChange}
                >
                  {regions &&
                    regions.map(region => (
                      <MenuItem key={region.id} value={region.id}>
                        {region.name}
                      </MenuItem>
                    ))}
                </Select>
              </FormControl>
            ) : null}
          </Box>
          <LocationsList dense>
            {filteredCities.map(city => (
              <LocationListItem
                key={city.id}
                current={(currentLocation && currentLocation.id) === city.id}
              >
                <ListItemButton onClick={() => handleClickCity(city)}>
                  <ListItemText primary={city.name} />
                  <ListItemIcon>
                    <CheckIcon />
                  </ListItemIcon>
                </ListItemButton>
              </LocationListItem>
            ))}
          </LocationsList>
        </Box>
      </ModalDialog>
    </Box>
  );
};
