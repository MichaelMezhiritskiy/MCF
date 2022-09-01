import { createSlice } from '@reduxjs/toolkit';

// a redux slice adds action for a single feature of the app
//in this case we are making a reducer to change the username

const initialState = {
    favorites: [],
};

export const favoriteSlice = createSlice({
    name: 'changeFav',
    initialState,
    reducers: {
        addFavorite: (state, action) => {
            // console.log(action);
            // state.favorites = state.favorites.push(action.payload).slice();
            state.favorites.push(action.payload);
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter((el) => el !== action.payload)
        },
        reset: (state) => void(state.favorites = []),
    },
});

export const { addFavorite, removeFavorite, reset } = favoriteSlice.actions;

export default favoriteSlice.reducer;

