import React from 'react';
import Logo from '../Logo/Logo';


const NavBar: React.FC = () => {


  return (
    <nav className='navbar-header'>
        <Logo logo={false}/>
    </nav>
  );
};

export default NavBar;
