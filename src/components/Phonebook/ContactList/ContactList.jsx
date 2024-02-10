import React from 'react';

import { deleteContacts } from '../../../redux/contacts/contacts-slice';

import styles from './contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from '../../../redux/contacts/contacts-selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);

  const deleteContact = (id) => {
    dispatch(deleteContacts(id));
  };

  const elements = contacts.map(({ id, name, number }) => (
    <li key={id}>{name}: {number}
      <button onClick={() => deleteContact(id)}
        className={styles.btnDelete} type='button'>Delete</button></li>
  ));
  return (
    <div >      
      <ol className={styles.customList}>{elements}</ol>
    </div>
  );
};

export default ContactList;
