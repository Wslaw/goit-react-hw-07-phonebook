import { createSelector } from '@reduxjs/toolkit';

export const selectAllContacts = store => store.contacts;

export const selectFilteredContacts = createSelector(
  [selectAllContacts],
  contacts => {
    const { filter, items } = contacts;
    const normalizedFilter = filter ? filter.toLowerCase() : '';

    const filteredContacts = items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter)
    );

    return {
      items: filteredContacts,
      // isLoading: contacts.isLoading,
      // error: contacts.error,
    };
  }
);
