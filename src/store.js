import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userNameSlice';

export const store = configureStore({
    reducer: {
        setUser: userReducer,
    },
  })