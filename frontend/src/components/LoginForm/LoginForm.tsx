

import InputField from '../InputField/InputField'
import { LabelData } from '../LabelData/LabelData'
import classes from '../CreateUsersForm/createusersform.module.css'
import Button from '../Button/Button'

const LoginForm = () => {
  return (
    <form action="">
        <div className={classes.container}>
            <LabelData data='Username'/>
            <InputField type='usernane'/>
        </div>
        <div className={classes.container}>
            <LabelData data='Passoword'/>
            <InputField type='password'/>
        </div>
        <Button type='Login'/>
        <p> Don't have and account? <a href="#">Register</a> </p>
    </form>
  )
}

export default LoginForm