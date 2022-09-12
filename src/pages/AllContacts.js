import { useState, useEffect } from 'react';

import ContactList from '../components/contacts/ContactList';

function AllContactsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedContacts, setLoadedContacts] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      'https://react-contacts-f08d2-default-rtdb.firebaseio.com/contacts.json'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const contacts = [];

        for (const key in data) {
          const contact = {
            id: key,
            ...data[key],
          };
          contacts.push(contact);
        }

        setIsLoading(false);
        setLoadedContacts(contacts);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <section>
      <h1>All Contact</h1>
      <ContactList contacts={loadedContacts} />
    </section>
  );
}

export default AllContactsPage;
