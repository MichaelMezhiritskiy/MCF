import { createSlice } from '@reduxjs/toolkit';

// a redux slice adds action for a single feature of the app
//in this case we are making a reducer to change the username

const initialState = {
    favorites: [],
};

export const favoriteSlice = createSlice({
    name: 'favCryptos',
    initialState,
    reducers: {
        addFavorite: (state, payload) => {
            state.favorites.push(payload);
        },
        removeFavorite: (state, payload) => {
            let newArr = [];
            for (const element of state) {
                if (element !== payload) newArr.push(element);
            }
            state.favorites = newArr;
        },
        reset: (state) => state.favorites = [],
    },
});

export const { addFavorite, removeFavorite, reset } = favoriteSlice.actions;

export default favoriteSlice.reducer;

