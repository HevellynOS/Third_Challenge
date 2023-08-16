import React, { useState, useEffect } from 'react';
import Logo from '../Logo/Logo';
import Bag from '../../assets/images/Bag.png';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import InputSearch from '../InputSearch/InputSearch';


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
            <InputSearch
              type='text'
              placeholder='Enter item or restaurant you are looking for'
            />
            <img src={Bag} className='img-nav' alt="" />
            <Link to='/login'>
              <Button
                  height='66px'
                  radius='10px'
                  color="#FFFFFF"
                  backgroundcolor="#202020"
                  width="170px"
                  text='Sign In' 
                  click={function (_event: React.FormEvent<Element>): Promise<void> {
                    throw new Error('Function not implemented.');
                  } }            
                />
              </Link>
          </nav>
        )
      )}
    </header>
  );
};

export default Header;
