import React from 'react';
import logoLight from '../../assets/images/logofitmelight.png';
import logoDark from '../../assets/images/logofitme-dark.png';

interface NavbarProps {
    logo: boolean;
}

const Logo: React.FC<NavbarProps> = ({ logo }) => {
    const logoSrc = logo ? logoLight : logoDark;

    return (
        <div className={logo ? 'logo' : 'logo-dark'}>
            <img src={logoSrc} alt="logo" />
            {logo && <span className='fitme-logo'>Fit Me</span>}
        </div>
    );
};

export default Logo;
