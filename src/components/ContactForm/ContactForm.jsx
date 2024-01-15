import css from './style.module.css'
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';


export const ContactForm = () => {
  const contacts = useSelector(state => state.contacts.contacts);

 const dispatch = useDispatch();

  const handleSubmit = e => {
   e.preventDefault();
    
    const newContact = {
      id: nanoid(),
      name: e.target.elements.name.value,
      number: e.target.elements.number.value,
    
    };
      console.log(newContact.name)
    const isNameExist = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (isNameExist) {
      alert(`${newContact.name} is already in contacts!`);
    } else {
      dispatch(addContact(newContact));

      e.target.reset();
    }
  };

        return (
         <div>
            <form className={css.formContainer} onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
            
          
              required
            />
          </label>
          <label>
            Number:
                        <input
                            className={css.formInput}
              type="tel"
              name="number"
           
              required
            />
          </label>
          <button className={css.btn} type="submit">Add contact</button>
        </form>
        </div>
        
    )
    }



 export default ContactForm;