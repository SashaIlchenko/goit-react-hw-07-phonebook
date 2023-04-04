import { configureStore } from "@reduxjs/toolkit";
import { ValueReducer } from "./ValueSlice";
import { FilterReduser } from "./FilterSlice";



export const store = configureStore({
    reducer: {
        contacts: ValueReducer,
        filter: FilterReduser,
    },
});


