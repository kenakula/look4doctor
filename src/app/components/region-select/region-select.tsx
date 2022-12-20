/* eslint-disable react/jsx-boolean-value */
import { Autocomplete, TextField } from '@mui/material';
import { ICity } from 'app/shared/types';
import {
  setCurrentLocationFromSelect,
  useAppDispatch,
  useAppSelector,
} from 'app/store';
import { SyntheticEvent } from 'react';

export const RegionSelect = (): JSX.Element | null => {
  const { cities } = useAppSelector(state => state.location);
  const { currentLocation } = useAppSelector(state => state.location);
  const dispatch = useAppDispatch();

  const changeHandler = (event: SyntheticEvent, value: ICity | null): void => {
    event.preventDefault();

    if (value) {
      dispatch(setCurrentLocationFromSelect(value));
    }
  };

  return (
    <Autocomplete<ICity>
      sx={{
        '& .MuiAutocomplete-clearIndicator': { display: 'none' },
        width: 300,
      }}
      disablePortal
      options={cities && cities.length ? cities : []}
      renderInput={params => <TextField {...params} label="Ваш город" />}
      getOptionLabel={({ name }) => name}
      onChange={changeHandler}
      value={currentLocation}
      isOptionEqualToValue={(option, value) => option.id === value.id}
    />
  );
};
