import { createSlice } from '@reduxjs/toolkit';

// a redux slice adds action for a single feature of the app
//in this case we are making a reducer to change the username

const initialState = {
    username: 'placeholder',
};

export const userNameSlice = createSlice({
    name: 'setUser',
    initialState,
    reducers: {
        submitUsername: (state, action) => {
            state.username = action.payload;
            // const newState = (Object.assign({}, { ...state }, { userInput: action.payload }))
            // return { ...state, ...newState }
        },
        reset: (state) => state.username = '',
    },
});

export const { submitUsername, reset } = userNameSlice.actions;

export default userNameSlice.reducer;

//{ return { ...state, ...initialState } }