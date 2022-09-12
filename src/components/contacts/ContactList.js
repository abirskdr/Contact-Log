import ContactItem from './ContactItem';
import classes from './ContactList.module.css';

function ContactList(props) {
  return (
    <ul className={classes.list}>
      {props.contacts.map((contact) => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          image={contact.image}
          name={contact.name}
          address={contact.address}
          number={contact.number}
        />
      ))}
    </ul>
  );
}

export default ContactList;
