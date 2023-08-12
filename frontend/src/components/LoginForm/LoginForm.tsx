

import InputField from '../InputField/InputField'
import { LabelData } from '../LabelData/LabelData'
import classes from '../CreateUsersForm/createusersform.module.css'
import Button from '../Button/Button'

const LoginForm = () => {
  return (
    <form action="" className={classes.form}>
        <div className={classes.container}>
            <LabelData data='Username'/>
            <InputField type='usernane'/>
        </div>
        <div className={classes.container}>
            <LabelData data='Passoword'/>
            <InputField type='password'/>
        </div>
        <Button height='66px' radius='10px' color="#FFFFFF" backgroundColor="#FC8019" width="365px" type='Login'/>
        <p> Don't have and account? <a href="#">Register</a> </p>
    </form>
  )
}

export default LoginForm