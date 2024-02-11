
export const selectAllContacts = (store) => store.contacts.items;


export const selectFilteredContacts = store => {
  const { contacts, filter } = store;

  if (!filter) {
    return contacts;
  }

  const normalizedFilter = filter.toLowerCase();

   const filteredContacts = contacts.filter(({ name }) =>
    name.toLowerCase().includes(normalizedFilter)
    );
    return filteredContacts;
};
