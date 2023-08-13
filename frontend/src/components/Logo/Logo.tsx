import React from 'react';
import logoLight from '../../assets/images/logofitmelight.png';
import logoDark from '../../assets/images/logofitme-dark.png';
import { Link } from 'react-router-dom';
import classes from './logo.module.css'
interface NavbarProps {
    logo: boolean;
}

const Logo: React.FC<NavbarProps> = ({ logo }) => {
    const logoSrc = logo ? logoLight : logoDark;


    return (
            <Link className={classes.fitmeLogo} to={"/"}>
                <div>
                    <img src={logoSrc} alt="logo" />
                    {logo && <span>Fit Me</span>}
                </div>
            </Link>
    );
};

export default Logo;
