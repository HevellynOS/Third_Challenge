
import React from 'react'
import logoLight from '../../assets/images/logofitmelight.png'; // Import the light logo image
import logoDark from '../../assets/images/logofitme-dark.png';   // Import the dark logo image


interface NavbarProps {
    logo:boolean
}

const Logo: React.FC <NavbarProps> = ({ logo }) => {
    const logoSrc = logo ? logoLight : logoDark;

  return (
    <div>
        <img src={logoSrc} alt="logo" />
    </div>
  )
}

export default Logo