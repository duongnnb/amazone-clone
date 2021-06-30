import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <Header />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
