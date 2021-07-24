import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './login/login.css';
import * as ROUTES from '../../constants/routes';
import { auth } from '../../lib/firebase';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log('auth', auth);
        if (auth) {
          history.push(ROUTES.HOME);
        }
      })
      .catch((error) => alert(error.message));
  };

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log('auth', auth);
        if (auth) {
          history.push(ROUTES.HOME);
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to={ROUTES.HOME}>
        <img src="/images/amazon-2.png" alt="" className="login__logo" />
      </Link>

      <div className="login__container">
        <h1>Sign in</h1>

        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
          />

          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
          />

          <button type="submit" className="login__signInButton" onClick={signIn}>
            Sign In
          </button>
        </form>
        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

        <button className="login__registerButton" onClick={register}>
          Create your Amazon account
        </button>
      </div>
    </div>
  );
}

export default Login;
