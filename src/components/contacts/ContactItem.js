import { useContext } from 'react'; //allows us to establish a connection between a component and the context

import classes from './ContactItem.module.css';
import Card from '../ui/Card.js';
import FavoritesContext from '../../store/favorites-context';

function ContactItem(props) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        id: props.id,
        name: props.name,
        number: props.number,
        image: props.image,
        address: props.address,
      });
    }
  }

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img
            src={props.image}
            // onError={({ currentTarget }) => {
            //   currentTarget.onerror = null;
            //   currentTarget.src = '../defaultProfilePic/defaultprofilepic.jpg';
            // }}
            alt={props.name}
          />
        </div>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <p>Number: {props.number}</p>
          <p>Address: {props.address}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? 'Remove from favorite' : 'To favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}

export default ContactItem;
