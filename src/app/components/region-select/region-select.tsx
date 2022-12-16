/* eslint-disable react/jsx-boolean-value */
import { Autocomplete, TextField } from '@mui/material';
import { ICity } from 'app/shared/types';
import { useAppDispatch, useAppSelector } from 'app/store';
import { setCurrentLocationFromSelect } from 'app/store/location-slice/location.slice';
import { SyntheticEvent, useEffect, useState } from 'react';

export const RegionSelect = (): JSX.Element | null => {
  const { cities } = useAppSelector(state => state.location);
  const { currentLocation } = useAppSelector(state => state.location);
  const dispatch = useAppDispatch();
  const [citiesList, setCitiesList] = useState<ICity[]>([]);

  const changeHandler = (event: SyntheticEvent, value: ICity | null): void => {
    event.preventDefault();

    if (value) {
      dispatch(setCurrentLocationFromSelect(value));
    }
  };

  useEffect(() => {
    if (!cities || !cities.length) {
      return;
    }

    setCitiesList(cities);
  }, [cities, dispatch]);

  return (
    <Autocomplete<ICity>
      sx={{
        '& .MuiAutocomplete-clearIndicator': { display: 'none' },
        width: 300,
      }}
      disablePortal
      options={citiesList}
      renderInput={params => <TextField {...params} label="Ваш город" />}
      getOptionLabel={({ name }) => name}
      onChange={changeHandler}
      value={currentLocation}
      isOptionEqualToValue={(option, value) => option.id === value.id}
    />
  );
};
