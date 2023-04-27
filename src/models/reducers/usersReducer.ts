import { createReducer } from '@reduxjs/toolkit';
import { User } from 'src/types/interfaces';
import { registrUser } from '../thunks';

interface InitialState {
  user?: User;
}

const initialState: InitialState = {};

export const usersReducer = createReducer(initialState, (builder) => {
  builder.addCase(registrUser.fulfilled, (state) => ({
    ...state,
  }));
});
