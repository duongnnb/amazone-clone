import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { Checkout, Header, Login, Home } from './components';
import * as ROUTES from './constants/routes';
import { useEffect } from 'react';
import { auth } from './lib/firebase';
import { useStateValue } from './context/global';

function App() {
  const [{ loading }, dispatch] = useStateValue();

  useEffect(() => {
    dispatch({
      type: 'SET_AUTH_LOADING',
      loading: true,
    });
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser,
        });
      } else {
        dispatch({ type: 'SET_USER', user: null });
      }
    });
  }, [dispatch]);

  if (loading) {
    return <div className="App__loading">Loading App...</div>;
  }

  return (
    <Router>
      <Switch>
        <Route path={ROUTES.SIGN_IN}>
          <Login />
        </Route>
        <Route path={ROUTES.CHECKOUT}>
          <Header />
          <Checkout />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Header />
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
