import React from 'react';
import { CreateUsersForm } from '../src/components/CreateUsersForm/CreateUsersForm';
import NavBar from '../src/components/NavBar/NavBar';
import Footer from '../src/components/Footer/Footer';


const RegisterPage: React.FC = () => {
  return (
    <>
      <NavBar/>
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
