import { useEffect, useState } from 'react';
import {
  Box,
  DialogContent,
  DialogTitle,
  FormControl,
  IconButton,
  InputLabel,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material';
import NearMeIcon from '@mui/icons-material/NearMe';
import { ICity } from 'app/shared/types';
import {
  LocationButton,
  LocationDialog,
  LocationListItem,
  LocationsList,
} from './custom-components';
import { grey } from '@mui/material/colors';
import CloseIcon from '@mui/icons-material/Close';
import CheckIcon from '@mui/icons-material/Check';
import {
  setCurrentLocationFromSelect,
  useAppDispatch,
  useAppSelector,
} from 'app/store';

interface Props {
  location: ICity;
}

export const LocationSelector = ({ location }: Props): JSX.Element => {
  const dispatch = useAppDispatch();
  const [modalOpenState, setModalOpenState] = useState(false);
  const { cities, regions, currentLocation } = useAppSelector(
    state => state.location,
  );
  const [currentRegionId, setCurrentRegionId] = useState<number>();
  const [filteredCities, setFilteredCities] = useState<ICity[]>(cities ?? []);

  useEffect(() => {
    if (currentLocation && cities) {
      setCurrentRegionId(currentLocation.region.id);
      setFilteredCities(
        cities.filter(({ region: { id } }) => id === currentLocation.region.id),
      );
    }
  }, [currentLocation, cities]);

  const handleModalClose = (): void => {
    setModalOpenState(false);
  };

  const handleModalOpen = (): void => {
    setModalOpenState(true);
  };

  const handleRegionChange = (event: SelectChangeEvent<number>): void => {
    setCurrentRegionId(+event.target.value);

    if (cities) {
      setFilteredCities(
        cities.filter(({ region: { id } }) => id === +event.target.value),
      );
    }
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
      <LocationDialog open={modalOpenState} onClose={handleModalClose}>
        <DialogTitle>
          <IconButton
            aria-label="close"
            onClick={handleModalClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
          Выберите город
        </DialogTitle>
        <DialogContent dividers>
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
        </DialogContent>
      </LocationDialog>
    </Box>
  );
};
