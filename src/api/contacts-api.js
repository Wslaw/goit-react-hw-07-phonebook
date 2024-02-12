import axios from 'axios';

const contactsInstance = axios.create({
  baseURL: 'https://65c5c2bee5b94dfca2e0408b.mockapi.io/api/contacts',
});

export const requestFetchContacts = async () => {
  const { data } = await contactsInstance.get('/');
  return data;
};

export const requestAddContacts = async body => {
  const { data } = await contactsInstance.post('/', body);
  console.log('data=', data);
  return data;
};

export const requestDeleteContacts = async id => {
  const { data } = await contactsInstance.delete(`/${id}`);
  return data;
};
