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
    name: 'value',
    initialState: {
        contacts: [],
        isLoading: false,

    },
    extraReducers: (builder) => {
        builder.addCase(fetchContacts.pending, handlePending)
            .addCase(fetchContacts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.contacts = action.payload;
            })
            .addCase(fetchContacts.rejected, handleRejected)
            .addCase(addContact.pending, handlePending)
            .addCase(addContact.fulfilled, (state, action) => {
                const variable = state.contacts.find(
                    contact => contact.name.toLowerCase() === action.payload.name.toLowerCase(),
                );
                if (variable) {
                    alert(`${action.payload.name} is already in contacts`);
                    return state;
                }
                state.isLoading = false;
                state.error = null;
                state.contacts.push(action.payload);
            })
            .addCase(addContact.rejected, handleRejected)
            .addCase(deleteContact.pending, handlePending)
            .addCase(deleteContact.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                const index = state.contacts.findIndex(contact => contact.id === action.payload.id);
                state.contacts.splice(index, 1);
            })
            .addCase(deleteContact.rejected, handleRejected)
    }
});


export const ValueReducer = valueSlice.reducer;


