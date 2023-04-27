import { createAsyncThunk } from '@reduxjs/toolkit';
import { Event } from 'src/types/interfaces';
import axios from 'axios';

export const getAllEvents = createAsyncThunk('events/getAllEvents', async () => {
  const response = await axios.get<Event[]>('/api/getallevents');

  return response.data;
});
