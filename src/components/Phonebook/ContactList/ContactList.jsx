import React from 'react';
import { useEffect } from 'react';
// import  {deleteContact}  from '../../../redux/contacts/contacts-slice';
import { deleteContact } from '../../../redux/contacts/contacts-operations';
import styles from './contactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectFilteredContacts } from '../../../redux/contacts/contacts-selectors';
import { fetchContacts } from '../../../redux/contacts/contacts-operations';

const ContactList = () => {
  const {items, isLoading, error} = useSelector(selectFilteredContacts);
  // console.log( items);
  const dispatch = useDispatch();

  useEffect(()=>{
dispatch(fetchContacts())
  }, [dispatch])

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };
// const {items, isLoading, error} = contacts;

if (!items || !Array.isArray(items) || items.length === 0) {
  return <p>No  contacts found.</p>;
}

  const elements = items.map(({ id, name, phone }) => (
    <li key={id}>{name}: {phone}
      <button onClick={() => handleDeleteContact(id)}
        className={styles.btnDelete} type='button'>Delete</button></li>
  ));
  
  return (
    <div >
      {error && <p>{error}</p>}
      {isLoading && <p>...Loading</p>}
      {Boolean(items.length ) &&     
      (<ol className={styles.customList}>{elements}</ol>)}
    </div>
  );
};

export default ContactList;
