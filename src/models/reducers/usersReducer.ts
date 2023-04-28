import { createReducer } from '@reduxjs/toolkit';
import { authUser, registrUser } from '../thunks';
import { getUserData } from '../thunks/usersThunks';
import { RegistrationUser } from 'src/types/interfaces';

interface InitialState {
  userId: number | null;
  isAuthed: boolean;
  userData?: RegistrationUser;
}

const initialState: InitialState = {
  userId: null,
  isAuthed: false,
};

export const usersReducer = createReducer(initialState, (builder) => {
  builder.addCase(registrUser.fulfilled, (state) => ({
    ...state,
  }));
  builder
    .addCase(authUser.fulfilled, (state, action) => {
      ({
        ...state,
        userId: action.payload,
        isAuthed: true,
      });
    })
    .addCase(authUser.rejected, (state) => ({
      ...state,
      userId: null,
      isAuthed: false,
    }))
    .addCase(getUserData.fulfilled, (state, action) => ({
      ...state,
      userData: action.payload,
    }));
});
