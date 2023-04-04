export const getContacts = state => state.contacts.contacts;
export const getFilter = state => state.filter.filter;
export const getFilteredContacts = state => {
    const contacts = getContacts(state);
    const normalizeFilter = getFilter(state).toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizeFilter))

}
export const getIsLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;