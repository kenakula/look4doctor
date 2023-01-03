import {
  Breakpoint,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  styled,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { grey } from '@mui/material/colors';

export const CustomDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiPaper-root': {
    width: '100%',
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogTitle-root': {
    display: 'flex',
    flexDirection: 'column',
  },
}));

interface Props {
  openState: boolean;
  handleClose: () => void;
  dialogTitle: string;
  children: JSX.Element;
  handleAccept?: () => void;
  acceptText?: string;
  handleDecline?: () => void;
  declineText?: string;
  maxWidth?: Breakpoint;
}

export const ModalDialog = ({
  openState,
  handleClose,
  dialogTitle,
  children,
  handleAccept,
  acceptText = 'OK',
  handleDecline,
  declineText = 'Отмена',
  maxWidth = 'md',
}: Props): JSX.Element => {
  const hasAction = handleAccept || handleDecline;

  return (
    <CustomDialog open={openState} onClose={handleClose} maxWidth={maxWidth}>
      <DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        {dialogTitle}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      {hasAction ? (
        <DialogActions>
          {handleDecline && (
            <Button
              color="error"
              variant="outlined"
              onClick={handleDecline}
              type="button"
            >
              {declineText}
            </Button>
          )}
          {handleAccept && (
            <Button variant="contained" onClick={handleAccept} type="button">
              {acceptText}
            </Button>
          )}
        </DialogActions>
      ) : null}
    </CustomDialog>
  );
};
