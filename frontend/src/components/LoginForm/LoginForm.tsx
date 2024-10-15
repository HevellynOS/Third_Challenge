import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import InputField from '../InputField/InputField';
import classes from './loginform.module.css';
import Button from '../Button/Button';
import useSignIn from '../../../server/hook/useUsersData';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string>('');

  const { signIn, loading, error } = useSignIn();

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) {
      setLoginError('Email and password are required');
      return;
    }

    try {
      await signIn(email, password);
      if (error) {
        setLoginError('Invalid email or password');
      } else {
        setLoginError('');
        console.log('Login successful');
      }
    } catch (err) {
      setLoginError('Login failed');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleLogin} className={classes.form}>
      <div className={classes.container}>
        <label htmlFor="email">Email</label>
        <InputField type='email' value={email} onChange={event => setEmail(event.target.value)} />
      </div>
      <div className={classes.container}>
        <label htmlFor="password">Password</label>
        <InputField type='password' value={password} onChange={event => setPassword(event.target.value)} />
      </div>
      {loginError && <p className={classes.errorMsg}>{loginError}</p>}
      <Button
        text={loading ? 'Logging in...' : 'Login'}
        color="#FFFFFF"
        backgroundcolor="#FC8019"
        width="365px"
        height="66px"
        radius="10px"
        click={handleLogin}
      />
      <p>Don't have an account? 
        <Link to="/register">
          Register
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
