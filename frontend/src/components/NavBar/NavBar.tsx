import React from 'react';
import Logo from '../Logo/Logo';
import InputSearch from '../InputSearch/InputSearch';
import Bag from '../../assets/images/Bag.png';
import Button from '../Button/Button';

interface NavBarProps {
  showInput: boolean;
  showButton: boolean;
  showBag: boolean;
}

const NavBar: React.FC<NavBarProps> = ({showBag, showInput, showButton }) => {
  return (
    <nav className='navbar-header'>
      <Logo logo={false}/>
      {showInput && <InputSearch />}
      {showBag && <img src={Bag} alt="" />}
      {showButton && (
        <Button height='66px' radius='10px' color="#FFFFFF" backgroundColor="#202020" width="96px" type='Sign in'/>
      )}
    </nav>
  );
};

export default NavBar;
