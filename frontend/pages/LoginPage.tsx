
import React from 'react';
import NavBar from '../src/components/NavBar/NavBar';
import LoginForm from '../src/components/LoginForm/LoginForm'
import Footer from '../src/components/Footer/Footer'
const LoginPage = () => {
  return (
    <>
        <NavBar/>
        <main className='login-page'>
            <LoginForm/>
        </main>
        <Footer/>
    </>
  )
}

export default LoginPage