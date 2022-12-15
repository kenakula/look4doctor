/* eslint-disable react/jsx-boolean-value */
import { Autocomplete, TextField } from '@mui/material';
import { ICity } from 'app/shared/types';
import {
  getSavedCityAndRegion,
  setCurrentCity,
  useAppDispatch,
  useAppSelector,
} from 'app/store';
import { SyntheticEvent, useEffect, useState } from 'react';

export const RegionSelect = (): JSX.Element | null => {
  const { cities, currentCity } = useAppSelector(state => state.assets);
  const dispatch = useAppDispatch();
  const [citiesList, setCitiesList] = useState<ICity[]>([]);

  const changeHandler = (event: SyntheticEvent, value: ICity | null): void => {
    event.preventDefault();

    if (value) {
      dispatch(setCurrentCity(value));
    }
  };

  useEffect(() => {
    if (!cities || !cities.length) {
      return;
    }

    setCitiesList(cities);
    dispatch(getSavedCityAndRegion());
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
      value={currentCity}
      isOptionEqualToValue={(option, value) => option.id === value.id}
    />
  );
};
