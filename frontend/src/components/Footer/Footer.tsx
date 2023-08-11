


import Logo from '../Logo/Logo'
import facebookIcon from '../../assets/images/facebook icon.png'
import instagramIcon from '../../assets/images/instagram icon.png'
import twitterIcon from '../../assets/images/twitter icon.png'

const Footer = () => {
  return (
    <footer className='footer'>
        <Logo logo={true}/>
      <nav className='container-nav-footer'>
        <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Help & Support</a></li>
            <li><a href="#">T&C</a></li>
        </ul>
        <ul>
            <li><a href=""><img src={facebookIcon} alt="" /></a></li>
            <li><a href=""><img src={instagramIcon} alt="" /></a></li>
            <li><a href=""><img src={twitterIcon} alt="" /></a></li>
        </ul>
      </nav>
        <div className='contact'>Contact: <a href="#">+91 1234567899</a></div>
    </footer>
  )
}

export default Footer