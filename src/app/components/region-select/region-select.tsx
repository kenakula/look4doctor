/* eslint-disable react/jsx-boolean-value */
import { Autocomplete, styled, TextField } from '@mui/material';
import { ICity } from 'app/shared/types';
import {
  setCurrentLocationFromSelect,
  useAppDispatch,
  useAppSelector,
} from 'app/store';
import { SyntheticEvent } from 'react';

const CustomAutocomplete = styled(Autocomplete)({
  '& .MuiAutocomplete-clearIndicator': { display: 'none' },
}) as typeof Autocomplete;

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
    <CustomAutocomplete<ICity>
      disablePortal
      options={cities && cities.length ? cities : []}
      renderInput={params => <TextField {...params} label="Выберите город" />}
      getOptionLabel={({ name }) => name}
      onChange={changeHandler}
      value={currentLocation}
      isOptionEqualToValue={(option, value) => option.id === value.id}
      noOptionsText="Не найдено"
    />
  );
};
