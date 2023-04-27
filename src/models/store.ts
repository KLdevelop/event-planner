import { configureStore } from '@reduxjs/toolkit';
import { eventReducer, usersReducer } from './reducers';

const store = configureStore({
  reducer: {
    events: eventReducer,
    users: usersReducer,
  },
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
