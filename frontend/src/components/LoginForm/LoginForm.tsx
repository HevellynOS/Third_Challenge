import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../InputField/InputField';
import { LabelData } from '../LabelData/LabelData';
import classes from '../CreateUsersForm/createusersform.module.css';
import Button from '../Button/Button';
import fetchData from '../../../../backend/index';


interface User {
  objectId: string;
  name: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState<string>('');

  const getUsers = async () => {
    try {
      const response = await fetchData.get("classes/login");
      const responseUsers: User[] = response.data.results;
      
      const matchingUser = responseUsers.find(user => user.name === username && user.password === password);
      
      if (matchingUser) {
        // Perform successful login action
        console.log("Login successful");
        setLoginError('');
      } else {
        // Display login error message
        console.log("Login failed");
        setLoginError('Invalid username or password');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    getUsers();
  };

  return (
    <form onSubmit={handleLogin} className={classes.form}>
      <div className={classes.container}>
        <LabelData data='Username' />
        <InputField type='text' onChange={event => setUsername(event.target.value)} />
      </div>
      <div className={classes.container}>
        <LabelData data='Password' />
        <InputField type='password' onChange={event => setPassword(event.target.value)} />
      </div>
      {loginError && <p className={classes.errorMsg}>{loginError}</p>}
      <Button
          text='Login'
          click={handleLogin}
          color="#FFFFFF" 
          backgroundcolor="#FC8019"
          width="365px"
          height="66px"
          radius="10px"
        />
      <p> Don't have an account?<Link to="/register">Register</Link></p>
    </form>
  );
}

export default LoginForm;
