import { createSelector } from '@reduxjs/toolkit';
export const selectContacts = state => state.contacts.items;
export const selectLoader = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilters = state => state.filter;

export const selectFilteredContact = createSelector(
  [selectContacts, selectFilters],
  (contacts, filter) => {
    const normiliseName = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normiliseName)
    );
  }
);
