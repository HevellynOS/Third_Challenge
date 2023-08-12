import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import InputSearch from '../InputSearch/InputSearch';
import Bag from '../../assets/images/Bag.png';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface HeaderProps {
  showNav: boolean;
  showMenu: boolean;
}

const Header: React.FC<HeaderProps> = ({ showNav, showMenu }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header className='header'>
      <Logo logo={false}/>
      {windowWidth < 500 ? (
        showMenu && <FontAwesomeIcon icon={faBars} className='menu' />
      ) : (
        showNav && (
          <nav className='navbar-header'>
            <InputSearch />
            <img src={Bag} className='img-nav' alt="" />
            <Button 
              height='66px' 
              radius='10px' 
              color="#FFFFFF" 
              backgroundColor="#202020" 
              width="170px" 
              type='Sign in'/> 
          </nav>
        )
      )}
    </header>
  );
};

export default Header;
