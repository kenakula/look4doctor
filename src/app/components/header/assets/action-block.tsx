import { Button, Link } from '@mui/material';
import { ActionButtons } from 'app/shared/types';
import { ActionBlockWrapper } from './custom-components';

interface Props {
  buttons: ActionButtons;
}

export const ActionBlock = ({ buttons }: Props): JSX.Element | null => {
  const callBtn = buttons.call[0];
  const writeBtn = buttons.write[0];

  return (
    <ActionBlockWrapper>
      {callBtn && (
        <Button
          type="button"
          variant="contained"
          color="error"
          component={Link}
          href={callBtn.link}
        >
          {callBtn.name}
        </Button>
      )}
      {writeBtn && (
        <Button type="button" variant="contained" color="warning">
          {writeBtn.name}
        </Button>
      )}
    </ActionBlockWrapper>
  );
};
