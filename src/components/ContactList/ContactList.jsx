import { useSelector } from "react-redux";
import Contact from "../Contact/Contact"
import css from './ContactList.module.css'


const ContactList = () => {

  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.filter.name);

  const filteredContact = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()))

  return (
    <div className={css.contactList}>
      {filteredContact.map((contact) => (
        <Contact
          id={contact.id}
          key={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </div>
  );
}

export default ContactList