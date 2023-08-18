import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../InputField/InputField';
import classes from './loginform.module.css';
import Button from '../Button/Button';
import useUsersData from '../../../../backend/hooks/useUsersData';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string>('');

  const { usersData, fetchUsersData } = useUsersData();

  useEffect(() => {
    fetchUsersData(); // Buscar dados dos usuários quando o componente for montado
  }, []);

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!username || !password) {
      console.error("Error logging in: Username and password are required");
      return;
    }

    const matchingUser = usersData.find(user => user.username === username);

    if (matchingUser && matchingUser.password === password) {
      console.log("Login successful");
      setLoginError('');
    } else {
      console.log("Login failed");
      setLoginError('Invalid username or password');
    }
  };
  return (
    <form onSubmit={handleLogin} className={classes.form}>
      <div className={classes.container}>
        <label htmlFor="username">Username</label>
        <InputField type='text'  onChange={event => setUsername(event.target.value)} />
      </div>
      <div className={classes.container}>
        <label htmlFor="password">Password</label>
        <InputField type='password' onChange={event => setPassword(event.target.value)} />
      </div>
      {loginError && <p className={classes.errorMsg}>{loginError}</p>}
      <Button
        text='Login'
        color="#FFFFFF"
        backgroundcolor="#FC8019"
        width="365px"
        height="66px"
        radius="10px" click={function (event: React.FormEvent<Element>): Promise<void> {
          throw new Error('Function not implemented.');
        } }      />
      <p>Don't have an account? 
        <Link to="/register">
          Register
        </Link></p>
    </form>
  );
}

export default LoginForm;
