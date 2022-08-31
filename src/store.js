import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userNameSlice';
import favoriteSlice from './reducers/favoriteSlice';

export const store = configureStore({
    reducer: {
        setUser: userReducer,
        changeFav: favoriteSlice,
    },
  })