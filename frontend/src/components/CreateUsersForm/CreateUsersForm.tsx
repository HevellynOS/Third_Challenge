

import Button from '../Button/Button'
import InputField from '../InputField/InputField'
import { LabelData } from '../LabelData/LabelData'
import classes from './createusersform.module.css'
import { Link } from 'react-router-dom'


export const CreateUsersForm = () => {
  return (
    <form action="" className={classes.form}>
        <div className={classes.container}>
            <LabelData data='Full name'/>
            <InputField type='text'/>
        </div>
        <div className={classes.container}>
            <LabelData data='Username'/>
            <InputField type='text'/>
        </div>
        <div className={classes.container}>
            <LabelData data='E-mail'/>
            <InputField type='email'/>
        </div>
        <div className={classes.container}>
            <LabelData data='Password'/>
            <InputField type='password'/>
        </div>
        <div className={classes.container}>
            <LabelData data='Confirm password'/>
            <InputField type='password'/>
        </div>
        <Link to='/login'>
            <Button
                height='66px'
                radius='10px'
                color="#FFFFFF"
                backgroundcolor="#FC8019"
                width="365px"
                buttontype='Register'
                />
        </Link>
        <p> Yes i have an account? <Link to="/login">Login</Link> </p>
    </form>
  )
}