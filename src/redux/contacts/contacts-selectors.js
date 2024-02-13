import { createSelector } from "@reduxjs/toolkit";

export const selectAllContacts = store => store.contacts;

export const selectFilteredContacts = store => {
  const { filter } = store;
  const { items, isLoading, error } = store.contacts;
  // console.log(store.contacts);
  if (!filter) {
     return { items, isLoading, error };
  }
  // console.log(filter);
  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
  return {
    items: filteredContacts,
    isLoading,
    error,
  };
};
