import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from '@mui/material';
import { Container, RegionSelect } from 'app/components';
import { useState } from 'react';
import { FiltersContainer, FiltersDialog, SearchContainer } from '../assets';

export const SearchBox = (): JSX.Element => {
  const [filtersOpenState, setFiltersOpenState] = useState(false);

  const handleFiltersClose = (): void => {
    setFiltersOpenState(false);
  };

  const handleFiltersOpen = (): void => {
    setFiltersOpenState(true);
  };

  return (
    <Box component="section">
      <Container maxWidth="md">
        <Typography color="grey.500" sx={{ mb: 2 }}>
          Поиск по всем категориям: врачи, клиники, услуги
        </Typography>
        <SearchContainer>
          <RegionSelect />
          <TextField fullWidth sx={{ flexGrow: 1 }} placeholder="Поиск" />
        </SearchContainer>
        <FiltersContainer>
          <FormControlLabel
            control={<Checkbox />}
            label="Онлайн консультация"
          />
          <FormControlLabel control={<Checkbox />} label="Запись на сегодня" />
          <FormControlLabel control={<Checkbox />} label="Вызов врача на дом" />
          <FormControlLabel control={<Checkbox />} label="Выписка рецепта" />
          <Box>
            <Button
              size="small"
              type="button"
              variant="outlined"
              onClick={handleFiltersOpen}
            >
              Все фильтры
            </Button>
          </Box>
        </FiltersContainer>
        <FiltersDialog
          openState={filtersOpenState}
          handleClose={handleFiltersClose}
        />
      </Container>
    </Box>
  );
};
