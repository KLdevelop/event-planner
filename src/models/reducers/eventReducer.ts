import { createReducer } from '@reduxjs/toolkit';
import { Event, EventState } from 'src/types/interfaces';
import { getAllEvents } from '../thunks';

const initialState: EventState = {
  events: [],
};

export const eventReducer = createReducer(initialState, (builder) => {
  builder.addCase(getAllEvents.fulfilled, (state, action) => ({
    ...state,
    events: action.payload as Event[],
  }));
});
