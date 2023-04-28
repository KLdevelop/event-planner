import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthUser, RegistrationUser } from 'src/types/interfaces';
import axios from 'axios';

export const registrUser = createAsyncThunk('users/registr', async (user: RegistrationUser) => {
  await axios.post<RegistrationUser>('/api/users/', user);
});

export const authUser = createAsyncThunk('users/auth', async (user: AuthUser) => {
  console.log(user);
  const response = await axios.get<boolean>('/api/login');

  return response.data;
});
