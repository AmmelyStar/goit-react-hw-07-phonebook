import { ContactForm } from './ContactForm/ContactForm';
import  ContactList  from './ContactForm/ContactList/ContactList';
import '../redux/store';
import css from './ContactForm/style.module.css'
import Filter from './Filter/Filter'


export const App = () => {
 

    return (
      <>
        <div>
          <h1>Phonebook</h1>

          <ContactForm />

          <h2 className={css.app}>Contacts</h2>
          <Filter/>
          <ContactList
           
          />
        </div>
      </>
    );
  }


