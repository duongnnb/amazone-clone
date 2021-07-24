import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import { Checkout, Header, Login } from './components';
import * as ROUTES from './constants/routes';

function App() {
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
