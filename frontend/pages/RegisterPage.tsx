import React from 'react';
import { CreateUsersForm } from '../src/components/CreateUsersForm/CreateUsersForm';
import NavBar from '../src/components/NavBar/NavBar';


const RegisterPage: React.FC = () => {
  return (
    <>
    <header>
        <NavBar/>
    </header>
    <main className='register-page'>
      <h1>Register</h1>
      <hr />
      <CreateUsersForm />
    </main>
    <footer>

        
    </footer>
    </>

  );
};

export default RegisterPage;
