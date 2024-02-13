import { createSelector } from '@reduxjs/toolkit';

export const selectAllContacts = store => store.contacts;
export const selectFilter = store => store.filter;

export const selectFilteredContacts = createSelector(
  [selectAllContacts, selectFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );
  }
);
