import React from 'react';
import { CreateUsersForm } from '../src/components/CreateUsersForm/CreateUsersForm';
import Header from '../src/components/Header/Header';
import Footer from '../src/components/Footer/Footer';


const RegisterPage: React.FC = () => {
  return (
    <>
      <Header showMenu={false} showNav={false}/>
    <main className='register-page'>
      <h1>Register</h1>
      <hr />
      <CreateUsersForm />
    </main>
      <Footer/>
    </>

  );
};

export default RegisterPage;
