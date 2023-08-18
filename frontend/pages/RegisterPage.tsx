import React from 'react';
import RegisterForm from '../src/components/RegisterForm/RegisterForm';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';


const RegisterPage: React.FC = () => {
  return (
    <>
      <Header showMenu={false} showNav={false}/>
    <main className='register-page'>
      <h1>Register</h1>
      <hr />
      <RegisterForm />
    </main>
      <Footer/>
    </>

  );
};

export default RegisterPage;
