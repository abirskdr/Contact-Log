import { Route, Switch } from 'react-router-dom';

import AllContactsPage from './pages/AllContacts';
import NewContactPage from './pages/NewContact';
import FavoritesPage from './pages/Favorites';
import Layout from './components/layout/Layout.js';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllContactsPage />
        </Route>
        <Route path="/new-contact">
          <NewContactPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
