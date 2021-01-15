import React from 'react';
import { 
  FaLinkedinIn, 
  FaGithub, 
  FaInstagram, 
  FaWhatsapp,
  FaTools,
  FaHome,
  FaEnvelope,
  FaEye,
} from 'react-icons/fa';

import PropTypes from 'prop-types';
import NavStyled from './NavStyled';

import logo from 'public/img/NQ.png';

const Nav = () => {
  return (
    <NavStyled>
      <div className="nav-container-menu">
        <nav>
          <ul>
            <li>
              <a href="">
                  <FaHome className="nav-icons-menu" />
                  <div>Home</div>
                </a>
            </li>
            <li>
              <a href="">
                <FaTools className="nav-icons-menu" />
                <div>Skills</div>
              </a>
            </li>
            <li>
              <a href="">
                <FaEye className="nav-icons-menu" />
                <div>Portfolio</div>
              </a>
            </li>
            <li>
              <a href="">
                <FaEnvelope className="nav-icons-menu" />
                <div>Contact</div>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="nav-container-logo">
          <img src={logo} alt="Logo NQ"/>
      </div>
      <div className="nav-container-socials">
          <a href="https://www.linkedin.com/in/nicolascardona"><FaLinkedinIn className="nav-icons-socials" /></a>
          <a href="https://wa.link/6vzs30"><FaWhatsapp className="nav-icons-socials" /></a>
          <a href="https://github.com/CardonaNicolas"><FaGithub className="nav-icons-socials" /></a>
          <a href="https://www.instagram.com/niko.cardo/"><FaInstagram className="nav-icons-socials" /></a>
      </div>
    </NavStyled>
  );
}

Nav.propTypes = {
}

export default Nav;