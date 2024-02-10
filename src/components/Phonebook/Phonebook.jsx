import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import image from '../forest.jpg';

import styles from './phonebook.module.css';

const Phonebook = () => {

  return (
    <div className={styles.body} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles.container}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />
        <div>
          <h2 className={styles.title}>Contacts</h2>
          <p className={styles.text}>Find contacts by name</p>
          <Filter />

          <ContactList />
        </div>
      </div>
    </div>
  );
};

export default Phonebook;
