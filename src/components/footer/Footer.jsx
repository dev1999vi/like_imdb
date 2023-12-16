import React from 'react';
import './Footer.scss';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../content_wrapper/ContentWrapper";

const Footer = () => {
  return (
    <footer className='footer'>
      <ContentWrapper>
        <ul className='menu-items'>
          <li className='menu-item'>Terms Of Use</li>
          <li className='menu-item'>Privacy Terms</li>
          <li className='menu-item'>About</li>
          <li className='menu-item'>Blog</li>
          <li className='menu-item'>FAQ</li>
        </ul>
        <div  className='info-text'>
          <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum odio et blandit iaculis.
           Nam mauris nulla, imperdiet eu diam vel, porta aliquam ipsum. Aliquam erat volutpat. Etiam elementum 
           vehicula ipsum, nec interdum lectus varius eget. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            nec pretium lorem. Curabitur leo sem, pellentesque quis posuere iaculis, vehicula eget elit.
              Sed a ultrices diam, nec pulvinar quam. Fusce accumsan elit eget ligula tincidunt, at fringilla
               neque cursus. Duis rhoncus enim id nisl euismod commodo eu non tellus. Vivamus non risus in purus
                semper consequat. Aliquam rutrum dolor in est vulputate vestibulum. Pellentesque vulputate metus 
                aliquam tempor venenatis. Nunc sed mauris dictum, congue nibh sed, tincidunt leo. Quisque consequat diam diam, quis suscipit sapien condimentum sed.
                 </div>
        </div>
        <div className='social-icons'>
          <span className='icon'><FaFacebookF/></span>
          <span className='icon'><FaInstagram/></span>
          <span className='icon'><FaTwitter/></span>
          <span className='icon'><FaLinkedin/></span>
        </div>
      </ContentWrapper>
    </footer>
  )
}

export default Footer