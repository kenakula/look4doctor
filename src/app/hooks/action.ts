import { bindActionCreators } from '@reduxjs/toolkit';
import { assetsActions, authActions } from 'app/store';
import { useDispatch } from 'react-redux';

const actions = {
  ...authActions,
  ...assetsActions,
};

export const useActions = (): Record<string, unknown> => {
  const dispatch = useDispatch();

  return bindActionCreators(actions, dispatch);
};
