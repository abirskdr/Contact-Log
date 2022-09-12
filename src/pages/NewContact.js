import { useHistory } from 'react-router-dom'; //another hook

import NewContactForm from '../components/contacts/NewContactForm';

function NewContactPage() {
  const history = useHistory();

  function addContactHandler(contactData) {
    fetch(
      'https://react-contacts-f08d2-default-rtdb.firebaseio.com/contacts.json',
      {
        method: 'POST',
        body: JSON.stringify(contactData),
        header: {
          'Content-Type': 'application/json',
        },
      }
    ).then(() => {
      history.replace('/');
    });
  }

  return (
    <section>
      <h1>Add New Contact</h1>
      <NewContactForm onAddContact={addContactHandler} />
    </section>
  );
}

export default NewContactPage;
