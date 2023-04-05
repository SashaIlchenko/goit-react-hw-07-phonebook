import { createSelector } from "@reduxjs/toolkit";
export const selectContacts = state => state.contacts.contacts;
export const selectFilter = state => state.filter.filter;
export const selectFilteredContacts = createSelector([selectContacts, selectFilter],
    (contacts, filter) => {
        const normalizeFilter = filter.toLowerCase();
        return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter))
    })
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
