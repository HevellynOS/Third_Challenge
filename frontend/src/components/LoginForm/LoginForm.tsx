
import InputField from '../InputField/InputField';
import { LabelData } from '../LabelData/LabelData';
import classes from '../CreateUsersForm/createusersform.module.css';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const LoginForm = () => {
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
