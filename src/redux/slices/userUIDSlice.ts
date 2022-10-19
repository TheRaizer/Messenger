import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../types/redux/store.type';

const userUIDSlice = createSlice({
  name: 'userUID',
  initialState: '',
  reducers: {
    setUID: (_state, action: PayloadAction<string>) => {
      return action.payload;
    },
  },
});

export const { setUID } = userUIDSlice.actions;

export const selectUserUID = (state: RootState) => state.userUIDReducer;

export const userUIDReducer = userUIDSlice.reducer;
