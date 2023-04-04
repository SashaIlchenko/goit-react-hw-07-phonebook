import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name: 'filter',
    initialState: {
        filter: "",
    },
    reducers: {
        filter(state, action) {
            state.filter = action.payload;
        },
    }

})
export const { filter } = filterSlice.actions;
export const FilterReduser = filterSlice.reducer; 