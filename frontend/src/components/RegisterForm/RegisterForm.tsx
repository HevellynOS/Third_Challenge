import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import InputField from '../InputField/InputField';
import classes from './registerform.module.css';
import Button from '../Button/Button';

const RegisterForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationError, setRegistrationError] = useState<string>('');

  console.log(username) 
  const { createUser } = useUsersData();
  
  const isPasswordStrong = (password: string) => {
    const strongPasswordPattern = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return strongPasswordPattern.test(password);
  };


  const handleRegister = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setRegistrationError('Passwords do not match');
      return;
    }

    const newUser = {
      username,
      fullname,
      email,
      password
    };

    try {
      await createUser(newUser);
      console.log('Registration successful');
      setRegistrationError('');

    } catch (error) {
      console.log('Registration failed');
      setRegistrationError('Error registering user');
    }
  };

  return (
    <form onSubmit={handleRegister} className={classes.form}>
      <div className={classes.container}>
        <label htmlFor="username">Username</label>
        <InputField type="text" onChange={(event) => setUsername(event.target.value)} />
      </div>
      <div className={classes.container}>
        <label htmlFor="fullname">Full Name</label>
        <InputField type="text" onChange={(event) => setFullname(event.target.value)} />
      </div>
      <div className={classes.container}>
        <label htmlFor="email">E-mail</label>
        <InputField type="email" onChange={(event) => setEmail(event.target.value)} />
      </div>
      <div className={classes.container}>
        <label htmlFor="password">Password</label>
        <InputField type="password" onChange={(event) => setPassword(event.target.value)} />
      </div>
      <div className={classes.container}>
        <label htmlFor="confirmPassword">Confirm Password</label>
        <InputField type="password" onChange={(event) => setConfirmPassword(event.target.value)} />
      </div>
      {password && !isPasswordStrong(password) && (
        <div className={classes.container}>
          <p className={classes.passwordError}>
            Password should be at least 8 characters long and contain at least one letter, one digit, and one special character.
          </p>
        </div>
      )}
      {registrationError && <p className={classes.errorMsg}>{registrationError}</p>}
      <Button
              text="Register"
              color="#FFFFFF"
              backgroundcolor="#FC8019"
              width="365px"
              height="66px"
              radius="10px" 
              click={handleRegister}      />
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </form>
  );
};

export default RegisterForm;
