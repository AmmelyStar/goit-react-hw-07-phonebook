import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
import css from './style.module.css';
import {onRemoveContact} from '../../../redux/contactsSlice'
const ContactList = () => {
   const dispatch = useDispatch();

  const contacts = useSelector(state => state.contacts.contacts)
    const filter = useSelector(state => state.filter.filter);
  console.log(contacts)

    const deleteContact = id => {
    dispatch(onRemoveContact(id));
  };

  const findContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );


  return (
    <div className={css.container}>
      <h2 className={css.contacts}>Contacts List</h2>
      <div className={css.form}>
        <ul className={css.list}>
          {findContacts.map(({ id, name, number }) => (
            <li key={id} className={css.item}>
              {name} - {number}
              <button
                type="button"
                name="delete"
                onClick={() => deleteContact(id)}
                className={css.button}
              >
                Delete contact
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ContactList;