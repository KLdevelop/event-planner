import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthUser, RegistrationUser } from 'src/types/interfaces';
import axios from 'axios';

export const registrUser = createAsyncThunk('users/registr', async (user: RegistrationUser) => {
  await axios.post<RegistrationUser>('/api/users/', user);
});

export const authUser = createAsyncThunk('users/auth', async (user: AuthUser) => {
  console.log(user);
  const response = await axios.get<RegistrationUser[]>('/api/users');

  response.data.forEach((userItem) => {
    if (userItem.email === user.email) return userItem;
  });

  throw Error;
});

export const getUserData = createAsyncThunk('users/data', async (userId: number) => {
  const response = await axios.get<RegistrationUser>(`/api/users/${userId}`);

  return response.data;
});
