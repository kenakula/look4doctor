import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LocationState {
  loading: boolean;
}

const initialState: LocationState = {
  loading: false,
};

export const locationSlice = createSlice({
  name: 'assets',
  reducers: {
    test: (state, { payload }: PayloadAction<ITest>) => {
      console.log(state)
    }
  },
  initialState,
  extraReducers: { test },
})

export const {} = locationSlice.actions;
export const locationReducer = locationSlice.reducer;
