import { Box, FormControlLabel, Checkbox, styled } from '@mui/material';
import { ModalDialog } from 'app/components';

const FiltersList = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  '& .MuiFormControlLabel-label': {
    fontSize: 12,
  },
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: '1fr 1fr 1fr',
    '& .MuiFormControlLabel-label': {
      fontSize: 14,
    },
  },
}));

interface Props {
  openState: boolean;
  handleClose: () => void;
}

export const FiltersDialog = ({
  openState,
  handleClose,
}: Props): JSX.Element => {
  const handleDecline = (): void => {
    handleClose();
  };

  const handleAccept = (): void => {
    handleClose();
  };

  return (
    <ModalDialog
      openState={openState}
      handleClose={handleClose}
      dialogTitle="Выберите фильтры"
      handleDecline={handleDecline}
      handleAccept={handleAccept}
      acceptText="Применить"
    >
      <FiltersList>
        <FormControlLabel control={<Checkbox />} label="Онлайн консультация" />
        <FormControlLabel control={<Checkbox />} label="Запись на сегодня" />
        <FormControlLabel control={<Checkbox />} label="Вызов врача на дом" />
        <FormControlLabel control={<Checkbox />} label="Выписка рецепта" />
        <FormControlLabel control={<Checkbox />} label="Онлайн консультация" />
        <FormControlLabel control={<Checkbox />} label="Запись на сегодня" />
        <FormControlLabel control={<Checkbox />} label="Вызов врача на дом" />
        <FormControlLabel control={<Checkbox />} label="Выписка рецепта" />
        <FormControlLabel control={<Checkbox />} label="Онлайн консультация" />
        <FormControlLabel control={<Checkbox />} label="Запись на сегодня" />
        <FormControlLabel control={<Checkbox />} label="Вызов врача на дом" />
        <FormControlLabel control={<Checkbox />} label="Выписка рецепта" />
      </FiltersList>
    </ModalDialog>
  );
};
