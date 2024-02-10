// import { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { getFilteredContacts } from '../../../redux/contacts/contacts-selectors';
import { addContacts } from '../../../redux/contacts/contacts-slice';
import Notiflix from 'notiflix';


import styles from './contactForm.module.css';


const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getFilteredContacts);


  const handleSubmit = e => {
    e.preventDefault();   
    
    const nameInput = e.target.elements.name;
    const numberInput = e.target.elements.number;

    const normalizedName = nameInput.value.toLowerCase();
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() !== normalizedName
    );
      if (isDuplicate) {
        // alert(`${nameInput.value} is already in the phone book.`);
        Notiflix.Notify.failure(
          `${nameInput.value} is already in the phone book.`
        );

        e.target.reset();
      } else {
        dispatch(
          addContacts({
            id: nanoid(),
            name: nameInput.value,
            number: numberInput.value,
          })
        );
        e.target.reset();
      }
    
  };
 

  
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.wrapper}>
          <label htmlFor='name' className={styles.formLabel}>
            Name
          </label>
          <input
            id='name'
            className={styles.input}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder="Enter your Name."
          />
          <label htmlFor='number' className={styles.formLabel}>
            Number
          </label>
          <input
            id='number'
            className={styles.input}
            type="tel"
            name="number"
            pattern="[0-9\+\-]*"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Enter your contact"
          />
          <button type="submit" className={styles.btn}>
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
