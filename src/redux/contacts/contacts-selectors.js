export const selectAllContacts = store => store.contacts;

export const selectFilteredContacts = store => {
  const { filter } = store;
  const { items, isLoading, error } = store.contacts;
  console.log(store.contacts);
  if (!filter) {
     return { items, isLoading, error };
    // return store.contacts;
  }
  console.log(filter);
  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = items.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
  );
  return {
    // contacts: filteredContacts,
    items: filteredContacts,
    isLoading,
    error,
  };
};
