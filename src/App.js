import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import { Checkout, Header } from './components';
import * as ROUTES from './constants/routes';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path={ROUTES.CHECKOUT}>
          <Checkout />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
