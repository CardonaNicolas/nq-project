import React from 'react';
import { FaLinkedinIn, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import PropTypes from 'prop-types';
import NavStyled from './NavStyled';

import logo from 'public/img/NQ.png';

const Nav = () => {
  return (
    <NavStyled>
      <div className="nav-container-logo">
          <img src={logo}/>
      </div>
      <div className="nav-container-menu"></div>
      <div className="nav-container-socials">
          <FaLinkedinIn className="nav-icons-socials" />
          <FaWhatsapp className="nav-icons-socials" />
          <FaGithub className="nav-icons-socials" />
          <FaInstagram className="nav-icons-socials" />
      </div>
    </NavStyled>
  );
}

Nav.propTypes = {
}

export default Nav;