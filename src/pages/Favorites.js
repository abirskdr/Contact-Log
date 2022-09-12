import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import ContactList from '../components/contacts/ContactList';

function FavoritesPage() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0) {
    content = <p>You no favorites yet. Start adding some</p>;
  } else {
    content = <ContactList contacts={favoritesCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default FavoritesPage;
