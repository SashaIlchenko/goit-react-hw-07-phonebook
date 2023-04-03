import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./Operations";

const handlePending = state => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
};
export const valueSlice = createSlice({
    name: 'Value',
    initialState: {
        contacts: [],
        isLoading: false,
        filter: "",
    },
    extraReducers: {
        [fetchContacts.pending]: handlePending,
        [fetchContacts.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts = action.payload;
        },
        [fetchContacts.rejected]: handleRejected,
        [addContact.pending]: handlePending,
        [addContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.contacts.push(action.payload);
        },
        [addContact.rejected]: handleRejected,
        [deleteContact.pending]: handlePending,
        [deleteContact.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            const index = state.contacts.findIndex(contact => contact.id === action.payload);
            state.contacts.splice(index, 1);
        },
        [deleteContact.rejected]: handleRejected,
    }
    // reducers: {
    //     add(state, action) {
    //         const variable = state.contacts.find(
    //             contact => contact.name.toLowerCase() === action.payload.name.toLowerCase(),
    //         );
    //         if (variable) {
    //             alert(`${action.payload.name} is already in contacts`);
    //             return state;
    //         }
    //         state.contacts.push(action.payload);
    //     },
    //     prepare(text, number) {
    //         return {
    //             payload: {
    //                 name: text,
    //                 number: number,
    //                 id: nanoid(),
    //             },
    //         };
    //     },

    //     deleteValue(state, action) {
    //         const index = state.contacts.findIndex(contact => contact.id === action.payload);
    //         state.contacts.splice(index, 1);
    //     },
    //     filter(state, action) {
    //         state.filter = action.payload;

    //     },
    // },

});

export const { add, deleteValue, filter } = valueSlice.actions;
export const ValueReducer = valueSlice.reducer;


