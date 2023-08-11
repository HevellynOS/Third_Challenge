

import Button from '../Button/Button'
import InputField from '../InputField/InputField'
import { LabelData } from '../LabelData/LabelData'
import classes from './createusersform.module.css'


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
        <Button type='Register'/>
        <p> Yes i have an account? <a className='login' href="#">Login</a> </p>
    </form>
  )
}