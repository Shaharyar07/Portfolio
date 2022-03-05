import React from 'react';
import { BsInstagram, BsLinkedin } from 'react-icons/bs';
import { FaGithub } from 'react-icons/fa';

const SocialMedia = () => (
  <div className="app__social">
    <div onClick={() => window.open('https://www.linkedin.com/in/chsherryy', '_blank', 'noopener,noreferrer')}>
      <BsLinkedin />
    </div>
    <div onClick={() => window.open('https://github.com/Shaharyar07', '_blank', 'noopener,noreferrer')}>
      <FaGithub />
    </div>
    <div onClick={() => window.open('https://www.instagram.com/chsherryy/', '_blank', 'noopener,noreferrer')}>
      <BsInstagram />
    </div>
  </div>
);

export default SocialMedia;

