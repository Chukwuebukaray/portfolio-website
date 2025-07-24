import React from 'react'
import "./Footer.css";
import home from '../assets/home.png';
import user from '../assets/user.png';
import phone from '../assets/phone.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import youtube from '../assets/youtube.png';

const Footer = () => {
  return (
    <footer>
    <div className='footernav'>
        <div className='navitem'><img src={home} alt="Home" />Home</div>
    <div className='navitem'><img src={user} alt="About me" />About me</div>
    <div className='navitem'><img src={phone} alt="Contact" />Contact</div>
    </div>
    <div className='sociallinks'>
        <div className='sociallink'><img src={facebook} alt="Facebook" /></div>
        <div className='sociallink'><img src={instagram} alt="Instagram" /></div>
        <div className='sociallink'><img src={twitter} alt="Twitter" /></div>
        <div className='sociallink'><img src={youtube} alt="Youtube" /></div>
    </div>
    <div className='policy'>
      Terms of Service - Privacy Policy
    </div>
    </footer>
  )
}

export default Footer
