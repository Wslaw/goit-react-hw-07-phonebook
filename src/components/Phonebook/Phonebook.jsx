import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import winter from '../winter.jpg';
import summer from '../summer.jpg';

import styles from './phonebook.module.css';


const isWinterMonth = () => {
  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;
  return month === 12 || month === 1 || month === 2;
};


const Phonebook = () => {


  const isWinter = isWinterMonth();
  const backgroundImage = isWinter ? winter : summer;

  return (
    <div
      className={styles.body}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
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
