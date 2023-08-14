import InputField from '../InputField/InputField';
import { LabelData } from '../LabelData/LabelData';
import classes from '../CreateUsersForm/createusersform.module.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import fetchData from '../../../../backend/index';

interface User {
  objectId: string;
  name: string;
  password: string;
}

const LoginForm: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  const getUsers = async () => {
    try {
      const response = await fetchData.get("classes/login");
      const responseUsers = response.data.results; // Access the 'results' field
      console.log("Response:", response);
      console.log("Response Users:", responseUsers);
      if (Array.isArray(responseUsers)) {
        setUsers(responseUsers);
      } else {
        setUsers([]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <form action="" className={classes.form}>
      <div className={classes.container}>
        <LabelData data='Username' />
        <InputField type='username' />
      </div>
      <div className={classes.container}>
        <LabelData data='Password' />
        <InputField type='password' />
      </div>
      <Link to='/'>
        <Button
          height='66px'
          radius='10px'
          color="#FFFFFF"
          backgroundcolor="#FC8019"
          width="365px"
          buttontype='Login'
        />
      </Link>
      <p> Don't have an account?<Link to="/register">Register</Link></p>
    </form>
  );
}

export default LoginForm;
